import json,re,os,glob
from collections import defaultdict,Counter
FOLDER="/home/claude/casla_v/DVW CASLA 2026"
TEAMS_MAP={'516':('defensores','Defensores'),'585':('river','River'),'541':('hacoaj','Hacoaj'),
 '540':('campana','Campana'),'542':('lomas','Lomas'),'584':('boca','Boca'),'509':('ciudad','Ciudad'),
 '586':('sanlorenzo','San Lorenzo'),'545':('untref','UNTREF'),'511':('ferro','Ferro'),
 '544':('uba','UBA'),'587':('velez','V\u00e9lez')}
TARGETS={tid:slug for tid,(slug,disp) in TEAMS_MAP.items()}
NAMES_T={slug:disp for tid,(slug,disp) in TEAMS_MAP.items()}
DISP_BY_ID={tid:disp for tid,(slug,disp) in TEAMS_MAP.items()}
TYPE={'Q':'pot','T':'pot','M':'flo','H':'flo'}
yt={}
try:
    mv=open('/home/claude/casla_v/mapa_videos.js',encoding='utf-8',errors='replace').read()
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
    curset=None;rally=0;lastsv=('','');recv=False;rq='';rby=0;recz=''
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
            recv=False;rq='';rby=0;recz=''
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
            D['atk'][pnum].append([tp[0],('g' if(recv and rq in '#+') else 'b' if(recv and rq in '!-') else 'o'),1 if(recv and rby==pnum) else 0,recz if recv else '',tr[1] if len(tr)>1 else '',code[4] if len(code)>4 else '',tr[3] if len(tr)>3 else '',tsv,mid])
            recv=False
nf=0
for fp in sorted(glob.glob(FOLDER+'/*.dvw')):
    fn=os.path.basename(fp); m=re.match(r'&?(\d+)',fn)
    if not m: continue
    mid=m.group(1)
    t=open(fp,encoding='latin-1',errors='replace').read().replace('\r\n','\n').replace('\r','\n')
    mt=re.search(r'\[3TEAMS\](.*?)\[3',t,re.S)
    if not mt: continue
    tl=[l for l in mt.group(1).splitlines() if l.strip()]
    if len(tl)<2: continue
    home=tl[0].split(';');away=tl[1].split(';')
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
out={}
for s,D in DATA.items():
    out[s]={'name':D['name'],'atk':{str(k):v for k,v in D['atk'].items()},'srv':{str(k):v for k,v in D['srv'].items()},
            'rec':{str(k):v for k,v in D['rec'].items()},'info':D['info'],'names':{str(k):v for k,v in D['names'].items()},
            'lib':sorted(D['lib']),'set':{str(k):v for k,v in D['set'].items()},'app':{str(k):v for k,v in D['app'].items()}}
json.dump(out,open('/tmp/allteams_casla.json','w'),ensure_ascii=False,separators=(',',':'))
print("archivos procesados:",nf)
print("EQUIPO          part  atk   srv   rec")
for s,D in DATA.items():
    na=sum(len(v) for v in D['atk'].values()); ns=sum(len(v) for v in D['srv'].values()); nr=sum(len(v) for v in D['rec'].values())
    print(f"  {D['name']:12} {len(D['info']):3}  {na:5} {ns:5} {nr:5}")
