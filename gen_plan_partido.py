#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# ============================================================
#  gen_plan_partido.py  ·  CASLA
#  Genera plan_partido_data.js desde los DVW.
#  Uso (igual que los otros scripts del bat):
#     python gen_plan_partido.py --dvw_dir "CARPETA_DVW" --output_dir .
#  Si no se pasan args, autodetecta la carpeta DVW y escribe en el dir actual.
# ============================================================
import json, re, os, glob, sys, argparse
from collections import defaultdict, Counter

# --- equipos de la liga (ID del DVW -> slug de la app, nombre) ---
TEAMS_MAP = {
 '516':('defensores','Defensores'), '585':('river','River'), '541':('hacoaj','Hacoaj'),
 '540':('campana','Campana'), '542':('lomas','Lomas'), '584':('boca','Boca'),
 '509':('ciudad','Ciudad'), '586':('sanlorenzo','San Lorenzo'), '545':('untref','UNTREF'),
 '511':('ferro','Ferro'), '544':('uba','UBA'), '587':('velez','V\u00e9lez'),
}
TYPE={'Q':'pot','T':'pot','M':'flo','H':'flo'}

def read_dvw(fp):
    b=open(fp,'rb').read()
    try: t=b.decode('utf-8')
    except UnicodeDecodeError: t=b.decode('latin-1','replace')
    return t.replace('\r\n','\n').replace('\r','\n')

def build(dvw_dir, out_dir):
    TARGETS={tid:slug for tid,(slug,disp) in TEAMS_MAP.items()}
    NAMES_T={slug:disp for tid,(slug,disp) in TEAMS_MAP.items()}
    DISP_BY_ID={tid:disp for tid,(slug,disp) in TEAMS_MAP.items()}

    # videos (opcional; el plan de partido igual los lee en vivo)
    yt={}
    mv_path=os.path.join(out_dir,'mapa_videos.js')
    if os.path.exists(mv_path):
        try:
            mv=open(mv_path,encoding='utf-8',errors='replace').read()
            for m in re.finditer(r'"(\d+)":\s*"([^"]*)"',mv):
                g=re.search(r'([A-Za-z0-9_-]{11})',m.group(2)) if m.group(2) else None
                if g: yt[m.group(1)]=g.group(1)
        except: pass

    DATA={s:{'name':NAMES_T[s],'atk':defaultdict(list),'srv':defaultdict(list),'rec':defaultdict(list),
             'info':{},'names':{},'lib':set(),'set':Counter(),'app':Counter()} for s in TARGETS.values()}

    def walk(t,pfx,mid,D):
        sec='[3PLAYERS-H]' if pfx=='*' else '[3PLAYERS-V]'
        pm=re.search(re.escape(sec)+r'(.*?)\[3',t,re.S)
        if pm:
            for l in pm.group(1).strip().splitlines():
                f=l.split(';')
                if len(f)<13: continue
                try: num=int(f[1])
                except: continue
                D['names'][num]=f[9]
                if f[12].strip()=='L': D['lib'].add(num)
        i=t.find('[3SCOUT]\n'); scout=t[i+9:t.find('\n[3',i+9)].strip().split('\n')
        curset=None; lastsv=('',''); recv=False; rq=''; rby=0; recz=''; rally=0
        for line in scout:
            f=line.split(';'); c=f[0].strip()
            if len(c)<4: continue
            sk=c[3]; team=c[0]; code=c[1:]
            try: tsv=int(f[12])
            except: tsv=0
            try: pnum=int(code[:2])
            except: pnum=-1
            if team==pfx and pnum>=0: D['app'][pnum]+=1
            if sk=='S':
                st=f[8] if len(f)>8 else ''
                if st!=curset: curset=st; rally=0
                rally+=1
                tp=code[5:].split('~'); traj=tp[3] if len(tp)>3 else ''
                oz=traj[0] if traj and traj[0].isdigit() else ''
                dz=traj[1] if len(traj)>1 and traj[1].isdigit() else ''
                lastsv=(TYPE.get(code[3],'otro'),oz)
                if team==pfx and pnum>=0:
                    D['srv'][pnum].append([TYPE.get(code[3],'otro'),oz,dz,code[4] if len(code)>4 else '',rally-1,tsv,mid])
                recv=False; rq=''; rby=0; recz=''
                continue
            if sk=='E' and team==pfx and pnum>=0: D['set'][pnum]+=1
            if sk=='R' and team==pfx:
                rq=code[4] if len(code)>4 else ''; rby=pnum; recv=True
                tp=code[5:].split('~'); traj=tp[3] if len(tp)>3 else ''
                recz=traj[0] if traj and traj[0].isdigit() else ''
                landz=traj[1] if len(traj)>1 and traj[1].isdigit() else ''
                D['rec'][pnum].append([lastsv[0],lastsv[1],landz,rq,rally-1,tsv,mid])
                continue
            if team!=pfx and sk in ('A','D','E','B'): recv=False; continue
            if team==pfx and sk=='A':
                tp=code[5:].split('~'); tr=tp[1] if len(tp)>1 else ''
                D['atk'][pnum].append([tp[0],('g' if(recv and rq in '#+') else 'b' if(recv and rq in '!-') else 'o'),
                    1 if(recv and rby==pnum) else 0, recz if recv else '', tr[1] if len(tr)>1 else '',
                    code[4] if len(code)>4 else '', tr[3] if len(tr)>3 else '', tsv, mid, (rby if recv else 0)])
                recv=False

    files=sorted(glob.glob(os.path.join(dvw_dir,'*.dvw')))
    nf=0
    for fp in files:
        fn=os.path.basename(fp); m=re.search(r'\b(\d{6})\b',fn) or re.search(r'\b(\d{5})\b',fn)
        if not m: continue
        mid=m.group(1)
        t=read_dvw(fp)
        mt=re.search(r'\[3TEAMS\](.*?)\[3',t,re.S)
        if not mt: continue
        tl=[l for l in mt.group(1).splitlines() if l.strip()]
        if len(tl)<2: continue
        home=tl[0].split(';'); away=tl[1].split(';')
        hid=home[0].strip(); aid=away[0].strip()
        dm=re.search(r'(20\d\d-\d\d-\d\d)',fn); date=dm.group(1) if dm else '?'
        try: hs,as_=int(home[2]),int(away[2])
        except: hs,as_=0,0
        for tid,pfx,opp_id,my_s,opp_s in [(hid,'*',aid,hs,as_),(aid,'a',hid,as_,hs)]:
            if tid not in TARGETS: continue
            s=TARGETS[tid]; D=DATA[s]
            walk(t,pfx,mid,D)
            D['info'][mid]={'opp':DISP_BY_ID.get(opp_id,'?'),'date':date,'res':f"{my_s}-{opp_s}",'yt':yt.get(mid,'')}
        nf+=1

    # normalizar claves a string (como cuando pasaba por JSON)
    for s,D in DATA.items():
        D['atk']={str(k):v for k,v in D['atk'].items()}
        D['srv']={str(k):v for k,v in D['srv'].items()}
        D['rec']={str(k):v for k,v in D['rec'].items()}
        D['names']={str(k):v for k,v in D['names'].items()}
        D['set']={str(k):v for k,v in dict(D['set']).items()}

    # --- construir PP_DATA ---
    CB={'punta':{'X5','V5','X6','V6','XP'},'central':{'X1','X2','X7','XM'},'opuesto':{'X5','V5','X6','V6','X8','V8'}}
    def classify(D,num):
        if num in D['lib_set']: return 'L\u00edbero'
        combos=Counter(a[0] for a in D['atk'].get(str(num),[]))
        tot=sum(combos.values()); sets=D['set'].get(str(num),0)
        if sets>tot and sets>20: return 'Armador'
        if tot<5: return 'Sub'
        quick=sum(combos[c] for c in ('X1','X2','X7','XM','X3','X4'))
        pos2=sum(combos[c] for c in ('X6','X8','V6','V8'))
        pos4=sum(combos[c] for c in ('X5','V5','XP','X0'))
        m=max(quick,pos2,pos4)
        return 'Central' if m==quick else 'Opuesto' if m==pos2 else 'Punta'
    def apellido(nm):
        nm=(nm or '').strip(); return (nm.split()[-1] if nm else '?')[:14]
    def domcombo(D,num):
        c=Counter(a[0] for a in D['atk'].get(str(num),[])); return c.most_common(1)[0][0] if c else ''
    def domserve(D,num):
        c=Counter(a[0] for a in D['srv'].get(str(num),[])); return 'potencia' if c.get('pot',0)>=c.get('flo',0) else 'flotado'

    PP={}
    for slug,D in DATA.items():
        D['lib_set']=set(D['lib'])
        pos={int(n):classify(D,int(n)) for n in D['names']}
        def cnt(kind,num): return len(D[kind].get(str(num),[]))
        puntas=sorted([n for n in pos if pos[n]=='Punta'],key=lambda n:-cnt('atk',n))
        centr =sorted([n for n in pos if pos[n]=='Central'],key=lambda n:-cnt('atk',n))
        opues =sorted([n for n in pos if pos[n]=='Opuesto'],key=lambda n:-cnt('atk',n))
        servers=sorted([n for n in pos if pos[n]!='L\u00edbero' and cnt('srv',n)>=30],key=lambda n:-cnt('srv',n))[:12]
        receiv =sorted([n for n in pos if cnt('rec',n)>=30],key=lambda n:-cnt('rec',n))[:6]
        players=[]
        def add(pfx,num,role,data,read):
            players.append({"id":pfx+str(num),"num":num,"name":apellido(D['names'].get(str(num),'')),
                            "pos":pos.get(num,'\u2014'),"role":role,"total":len(data),"read":read,"data":data})
        for n in puntas[:4]:
            d=D['atk'].get(str(n),[])
            if d: add("a",n,"punta",d,"Combo principal: "+domcombo(D,n)+".")
        for n in centr[:3]:
            d=D['atk'].get(str(n),[])
            if d: add("a",n,"central",d,"Primer tiempo: "+domcombo(D,n)+".")
        for n in opues[:2]:
            d=D['atk'].get(str(n),[])
            if d: add("a",n,"opuesto",d,"Combo principal: "+domcombo(D,n)+".")
        for n in servers:
            add("s",n,"saque",D['srv'].get(str(n),[]),"Saque "+domserve(D,n)+".")
        for n in receiv:
            add("r",n,"reception",D['rec'].get(str(n),[]),("L\u00edbero." if pos.get(n)=='L\u00edbero' else "Receptor."))
        PP[slug]={"name":D['name'],"players":players,"info":D['info']}

    outp=os.path.join(out_dir,'plan_partido_data.js')
    open(outp,'w',encoding='utf-8').write('window.PP_DATA='+json.dumps(PP,ensure_ascii=False,separators=(',',':'))+';')
    print("[plan_partido] %d DVW -> %s (%d equipos, %.1f KB)" % (
        nf, outp, len(PP), os.path.getsize(outp)/1024))

def autodetect_dvw():
    dirs=[d for d in glob.glob('DVW*') if os.path.isdir(d) and glob.glob(os.path.join(d,'*.dvw'))]
    return max(dirs,key=lambda d:len(glob.glob(os.path.join(d,'*.dvw')))) if dirs else None

if __name__=='__main__':
    ap=argparse.ArgumentParser()
    ap.add_argument('--dvw_dir',default=None)
    ap.add_argument('--output_dir',default='.')
    a=ap.parse_args()
    dvw=a.dvw_dir or autodetect_dvw()
    if not dvw or not os.path.isdir(dvw):
        print("[plan_partido] ERROR: no encontre la carpeta de DVW"); sys.exit(1)
    build(dvw, a.output_dir)
