# -*- coding: utf-8 -*-
"""
gen_baterias.py — Genera las baterías de los 13 partidos leyendo los DVW crudos,
usando EXACTAMENTE el mismo motor que objetivos.js (panel/scout en vivo).

Uso:  python gen_baterias.py "CARPETA DVW CASLA 2026" [salida.js]
Salida: datos_baterias.js  ->  window.BAT_PARTIDOS = {total, meta, jug, ind, eq}
"""
import os, re, sys, json, glob, unicodedata

# ── equipos (igual que build_video.py) ──
TEAM_NORM = {
  'Club Atlético San Lorenzo de Almagro':'CASLA','Club S. y D. Defensores de Banfield':'Defensores',
  'Club Atlético River Plate':'River','Universidad de Buenos Aires':'UBA','Club Ciudad de Campana':'Campana',
  'Municipio de Lomas de Zamora':'Lomas','Club Atlético Velez Sarsfield':'Velez','Club Ciudad de Buenos Aires':'Ciudad',
  'Universidad Nacional de Tres de Febrero':'Untref','Club Ferro Carril Oeste':'Ferro',
  'Club Nautico Hacoaj':'Hacoaj','Club Atlético Boca Juniors':'Boca',
}
def is_casla(n): return bool(re.search(r'san\s*lorenzo|almagro|\bcasla\b', n or '', re.I))
def norm_team(name):
    n=(name or '').strip()
    if n in TEAM_NORM: return TEAM_NORM[n]
    base=re.sub(r'\(NLA[^)]*\)','',n)
    base=re.sub(r'\b(Club|Atl[eé]tico|Ciudad de|Nautico|Universidad( Nacional)?( de)?|Municipio de|Ferro Carril|S\. y D\.|de|Volley|Volleyball)\b','',base,flags=re.I)
    return re.sub(r'\s+',' ',base).strip() or 'Rival'

# ══════════ MOTOR DE BATERÍAS — PORT EXACTO DE objetivos.js ══════════
def _bat_nuevo():
    na=lambda:{'#':0,'/':0,'=':0,'T':0}
    return {'S':{'#':0,'+':0,'/':0,'=':0,'T':0},
            'R':{'#':0,'+':0,'/':0,'=':0,'T':0},
            'B':{'#':0,'+':0,'T':0},
            'Aall':na(),'cent':na(),'alta':na(),'rap':na(),
            'rp':na(),'ri':na(),'rm':na(),'tr':na()}

def _calc_baterias(codes, side):
    pl={}
    def get(num):
        if num not in pl: pl[num]=_bat_nuevo()
        return pl[num]
    last_rec=None; rec_valida=False
    for line in codes:
        l=(line or '').strip()
        if len(l)<5: continue
        pfx=l[0]; body=l[1:].split(';')[0]
        if len(body)<5 or not re.match(r'^\d\d', body): continue
        num=body[0:2]; skill=body[2]; res=body[4]
        if skill=='S':
            last_rec=None; rec_valida=False
            if pfx==side:
                P=get(num); P['S']['T']+=1
                if res in P['S']: P['S'][res]+=1
        elif skill=='R' and pfx==side:
            last_rec=res; rec_valida=True
            Pr=get(num); Pr['R']['T']+=1
            if res in Pr['R']: Pr['R'][res]+=1
        elif pfx!=side and skill in ('A','D','E','B'):
            rec_valida=False
        elif skill=='B' and pfx==side:
            Pb=get(num); Pb['B']['T']+=1
            if res in Pb['B']: Pb['B'][res]+=1
        elif skill=='A' and pfx==side:
            tipo=body[3]  # Q=central · H=alta · T=rápida
            if last_rec is not None and rec_valida:
                rec_valida=False
                cat='rp' if last_rec in ('#','+') else 'ri' if last_rec=='!' else 'rm' if last_rec=='-' else 'tr'
            else:
                cat='tr'
            Pa=get(num)
            Pa['Aall']['T']+=1
            if res in Pa['Aall']: Pa['Aall'][res]+=1
            if tipo=='Q':
                Pa['cent']['T']+=1
                if res in Pa['cent']: Pa['cent'][res]+=1
            elif tipo=='T':
                Pa['rap']['T']+=1
                if res in Pa['rap']: Pa['rap'][res]+=1
            elif tipo=='H':
                Pa['alta']['T']+=1
                if res in Pa['alta']: Pa['alta'][res]+=1
            Pa[cat]['T']+=1
            if res in Pa[cat]: Pa[cat][res]+=1
    # equipo = suma de todos
    eq=_bat_nuevo()
    for n in list(pl.keys()):
        P=pl[n]
        for sec in P:
            for k in P[sec]: eq[sec][k]+=P[sec][k]
    pl['__EQUIPO__']=eq
    return pl

def _roundpy(x):
    # redondeo bancario (igual que round() de Python, que objetivos.js imita)
    import decimal
    return int(decimal.Decimal(x).quantize(0, rounding=decimal.ROUND_HALF_EVEN))

def _bat_to_pcts(P):
    def atk(d): return _roundpy((d['#']-d['/']-d['='])/d['T']*100) if d['T'] else None
    S,R,B=P['S'],P['R'],P['B']
    return {
        'sq':    _roundpy((S['#']+0.5*S['/']+0.25*S['+']-S['='])/S['T']*100) if S['T'] else None,
        'rec':   _roundpy((R['#']+0.5*R['+']-0.5*R['/']-R['='])/R['T']*100) if R['T'] else None,
        'bqpos': _roundpy((B['#']+B['+'])/B['T']*100) if B['T'] else None,
        'bqpt':  _roundpy(B['#']/B['T']*100) if B['T'] else None,
        'atqq':  atk(P['cent']),
        'atqhb': atk(P['alta']),
        'atqx':  atk(P['rap']),
        'atqrp': atk(P['rp']),
        'atqri': atk(P['ri']),
        'atqrm': atk(P['rm']),
        'atqtr': atk(P['tr']),
    }

# ══════════ LECTURA DVW ══════════
def parse_dvw(path):
    txt=open(path,encoding='latin-1',errors='ignore').read()
    def sec(a,b):
        m=re.search(r'\['+a+r'\](.*?)(?:\['+b+r'\]|\Z)',txt,re.S); return m.group(1) if m else ''
    teamlines=[l.split(';')[1] for l in sec('3TEAMS','3MORE').strip().splitlines()[:2] if ';' in l]
    if len(teamlines)<2: return None
    home_name=norm_team(teamlines[0]); away_name=norm_team(teamlines[1])
    casla_home=is_casla(teamlines[0]); casla_away=is_casla(teamlines[1])
    if not (casla_home or casla_away): return None  # solo partidos de CASLA
    side='*' if casla_home else 'a'
    rival=away_name if casla_home else home_name

    base=os.path.basename(path)
    mcode=re.search(r'&\s*(\d{4,6})',base) or re.search(r'(\d{6})',base)
    mdate=re.search(r'(\d{4}-\d{2}-\d{2})',base)
    date=mdate.group(1) if mdate else ''
    if not mcode: return None
    code=mcode.group(1)

    # roster CASLA: num -> nombre (para keyear por nombre como el perfil)
    psec = sec('3PLAYERS-H','3PLAYERS-V') if casla_home else sec('3PLAYERS-V','3ATTACKCOMBINATION')
    names={}
    for l in psec.strip().splitlines():
        c=l.split(';')
        if len(c)>10 and c[1].strip().isdigit():
            nn=c[1].strip().zfill(2)
            nom=(c[9].strip()+' '+c[10].strip()).strip() if len(c)>10 else c[9].strip()
            names[nn]=re.sub(r'\s+',' ',nom).strip()

    scout=txt.split('[3SCOUT]')[-1].strip().splitlines()
    # resultado (sets) — simple: contar de la meta si está
    return {'code':code,'rival':rival,'date':date,'side':side,'names':names,'scout':scout}

def build(folder, out='datos_baterias.js'):
    files=sorted(glob.glob(os.path.join(folder,'*.dvw')))
    matches=[]
    seen=set()
    for f in files:
        r=parse_dvw(f)
        if not r or r['code'] in seen: continue
        seen.add(r['code'])
        pl=_calc_baterias(r['scout'], r['side'])
        # por jugador (keyed por nombre) + equipo
        jug={}
        for num,P in pl.items():
            if num=='__EQUIPO__': continue
            nom=r['names'].get(num)
            if not nom: continue
            jug[nom]=_bat_to_pcts(P)
        eq=_bat_to_pcts(pl['__EQUIPO__']) if '__EQUIPO__' in pl else {}
        matches.append({'id':r['code'],'rival':r['rival'],'fecha':r['date'],
                        'jug':jug,'eq':eq,'_acum':pl,'names':r['names']})

    matches.sort(key=lambda m:m['fecha'])
    # ── ACUMULADO (suma de acumuladores de los 13 partidos, luego %) ──
    acc={}
    for m in matches:
        for num,P in m['_acum'].items():
            if num=='__EQUIPO__': continue
            nom=m['names'].get(num)
            if not nom: continue
            if nom not in acc: acc[nom]=_bat_nuevo()
            for sec2 in P:
                for k in P[sec2]: acc[nom][sec2][k]+=P[sec2][k]
    jug_acum={nom:_bat_to_pcts(acc[nom]) for nom in acc}
    eq_acc=_bat_nuevo()
    for nom in acc:
        for sec2 in acc[nom]:
            for k in acc[nom][sec2]: eq_acc[sec2][k]+=acc[nom][sec2][k]
    eq_acum=_bat_to_pcts(eq_acc)

    meta=[{'id':m['id'],'rival':m['rival'],'nombre':m['rival'],'fecha':m['fecha']} for m in matches]
    ind=[{'id':m['id'],'jug':m['jug'],'eq':m['eq']} for m in matches]
    OUT={'total':len(matches),'meta':meta,'jug':jug_acum,'ind':ind,'eq':eq_acum}
    open(out,'w',encoding='utf-8').write('window.BAT_PARTIDOS='+json.dumps(OUT,ensure_ascii=False,separators=(',',':'))+';')
    print('[baterias] %d partidos -> %s' % (len(matches), out))
    for m in matches: print('   %s  %s  (%d jugadores)' % (m['fecha'], m['rival'], len(m['jug'])))

def autodetect_dvw():
    dirs=[d for d in glob.glob('DVW*') if os.path.isdir(d) and glob.glob(os.path.join(d,'*.dvw'))]
    return max(dirs,key=lambda d:len(glob.glob(os.path.join(d,'*.dvw')))) if dirs else None

if __name__=='__main__':
    folder = sys.argv[1] if len(sys.argv)>1 else autodetect_dvw()
    if not folder or not os.path.isdir(folder):
        print('[baterias] ERROR: no encontre la carpeta de DVW (DVW CASLA 20XX).'); sys.exit(1)
    print('[baterias] Carpeta DVW: %s' % folder)
    out = sys.argv[2] if len(sys.argv)>2 else 'datos_baterias.js'
    build(folder, out)
    print('\nLISTO. Ahora publica datos_baterias.js y jugador.html con PUBLICAR_EN_GITHUB.bat')
