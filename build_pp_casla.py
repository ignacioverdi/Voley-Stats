import json
from collections import Counter
A=json.load(open('/tmp/allteams_casla.json'))
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
for slug,D in A.items():
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
        d=[a for a in D['atk'].get(str(n),[]) if a[0] in CB['punta']]
        if d: add("a",n,"punta",d,"Combo principal: "+domcombo(D,n)+".")
    for n in centr[:3]:
        d=[a for a in D['atk'].get(str(n),[]) if a[0] in CB['central']]
        if d: add("a",n,"central",d,"Primer tiempo: "+domcombo(D,n)+".")
    for n in opues[:2]:
        d=[a for a in D['atk'].get(str(n),[]) if a[0] in CB['opuesto']]
        if d: add("a",n,"opuesto",d,"Combo principal: "+domcombo(D,n)+".")
    for n in servers:
        add("s",n,"saque",D['srv'].get(str(n),[]),"Saque "+domserve(D,n)+".")
    for n in receiv:
        add("r",n,"reception",D['rec'].get(str(n),[]),("L\u00edbero." if pos.get(n)=='L\u00edbero' else "Receptor."))
    PP[slug]={"name":D['name'],"players":players,"info":D['info']}
open('/mnt/user-data/outputs/plan_partido_data.js','w',encoding='utf-8').write('window.PP_DATA='+json.dumps(PP,ensure_ascii=False,separators=(',',':'))+';')
import os
print("plan_partido_data.js =",round(os.path.getsize('/mnt/user-data/outputs/plan_partido_data.js')/1024,1),"KB")
print("\nEQUIPO         atk srv rec  partidos")
for slug,Tt in PP.items():
    r=Counter(p['role'] for p in Tt['players'])
    natk=sum(1 for p in Tt['players'] if p['role'] in('punta','central','opuesto'))
    print(f"  {Tt['name']:12} {natk:2}  {r['saque']:2}  {r['reception']:2}   {len(Tt['info'])}p")
print("\nEjemplo roster San Lorenzo:")
for p in PP['sanlorenzo']['players']:
    print(f"   {p['role']:10} #{p['num']:<3} {p['name']:14} {p['pos']:8} n={p['total']}")
