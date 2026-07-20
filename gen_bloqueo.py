# -*- coding: utf-8 -*-
# ============================================================================
#  gen_bloqueo.py  -  Genera datos_bloqueo.js (la 6a solapa del plan de partido)
#
#  Lo hace de la MISMA manera y en la MISMA corrida que las otras 5 solapas:
#  reconstruye los bloqueos desde los archivos que el pipeline ya genera:
#     - datos_video.js        (VIDEO_DATA: combo/zona/tiempo de cada accion)
#     - casla_players_db.json (base completa: efecto y fase de cada bloqueo)
#
#  Uso:  python gen_bloqueo.py
#  (correrlo DESPUES de update_db_casla.py y build_video.py)
# ============================================================================
import json, os, sys
from collections import defaultdict

BASE = os.path.dirname(os.path.abspath(__file__))
VIDEO = os.path.join(BASE, "datos_video.js")
DB    = os.path.join(BASE, "casla_players_db.json")
OUT   = os.path.join(BASE, "datos_bloqueo.js")

# combo del ataque bloqueado -> zona de cancha (mapa fijo del voley)
COMBO_ZONE = {"P2":"2","PR":"3","V3":"3","V5":"4","V6":"2","V8":"9","VP":"8",
              "X1":"3","X2":"3","X3":"3","X5":"4","X6":"2","X7":"3","X8":"9",
              "XM":"3","XP":"8"}
def zone_of(combo):
    if combo in COMBO_ZONE: return COMBO_ZONE[combo]
    p = combo[:2]
    if p in ("X5","V5","X0","V0"): return "4"
    if p in ("X6","V6","X4","XO","XQ"): return "2"
    if p in ("X8","V8"): return "9"
    if p in ("XP","VP","XB","XR","VB","VR"): return "8"
    return "3"

# PP_BLOCK usa 'sanlorenzo' para el equipo propio (CASLA)
def pp_key(slug): return "sanlorenzo" if slug == "casla" else slug

def load_video():
    t = open(VIDEO, encoding="utf-8").read()
    return json.loads(t[t.index("{"):t.rstrip().rstrip(";").rfind("}")+1])

def main():
    if not (os.path.exists(VIDEO) and os.path.exists(DB)):
        print("[ERROR] Falta datos_video.js o casla_players_db.json en esta carpeta.")
        sys.exit(1)

    V = load_video()
    MATCHES = V["matches"]
    db = json.load(open(DB, encoding="utf-8"))["teams"]

    # slug -> nombre display (para buscar en la DB)
    slug2name = {}
    for m in MATCHES.values():
        slug2name[m["home"]] = m["homeName"]
        slug2name[m["away"]] = m["awayName"]

    # PP_BLOCK[key] = { num -> {"name","data":[...]} }
    ACC = defaultdict(lambda: defaultdict(lambda: {"name": "", "data": []}))

    for mid, m in MATCHES.items():
        A = m["actions"]
        date = m.get("date", "")
        atks_by_team = defaultdict(list)          # slug -> [ataques]
        blks_by_team = defaultdict(list)          # slug -> [bloqueos]
        for a in A:
            if a["skill"] == "A": atks_by_team[a["tm"]].append(a)
            elif a["skill"] == "B": blks_by_team[a["tm"]].append(a)

        for slug, blks in blks_by_team.items():
            if slug not in slug2name:  continue
            opp = m["away"] if slug == m["home"] else m["home"]
            opp_atks = atks_by_team.get(opp, [])
            dbname = slug2name.get(slug)
            dbT = db.get(dbname, {})

            # fase (atype) desde la DB: por jugador, bloqueos de esa fecha en orden
            db_fase = defaultdict(list)
            for num, pl in dbT.items():
                for x in pl.get("blk", []):
                    if x.get("date") == date:
                        db_fase[str(int(num))].append((x.get("effect"), x.get("atype")))
            cursor = defaultdict(int)

            for b in sorted(blks, key=lambda a: a["t"]):
                num = str(int(b["num"]))
                ev  = b["ev"]; t = b["t"]
                # combo: ataque rival con timestamp mas cercano (dt<=3s)
                combo = ""
                if opp_atks:
                    best = min(opp_atks, key=lambda a: abs(a["t"] - t))
                    if abs(best["t"] - t) <= 3 and best.get("x"):
                        combo = best["x"]
                zona = zone_of(combo) if combo else "3"
                # fase: siguiente bloqueo de la DB del jugador con el mismo efecto
                og = ""; seq = db_fase.get(num, []); i = cursor[num]
                while i < len(seq):
                    if seq[i][0] == ev:
                        at = seq[i][1]; og = "g" if at == 1 else "o" if at == 0 else ""
                        cursor[num] = i + 1; break
                    i += 1
                else:
                    cursor[num] = len(seq)
                key = pp_key(slug)
                rec = ACC[key][num]
                if not rec["name"]: rec["name"] = b["name"]
                rec["data"].append([combo, zona, ev, t, mid, og])

    # armar PP_BLOCK final, ordenado por total desc
    PP = {}
    for key, players in ACC.items():
        lst = [{"num": num, "name": p["name"], "role": "bloqueo",
                "total": len(p["data"]), "data": p["data"]}
               for num, p in players.items()]
        lst.sort(key=lambda p: -p["total"])
        PP[key] = lst

    open(OUT, "w", encoding="utf-8").write(
        "window.PP_BLOCK=" + json.dumps(PP, ensure_ascii=False, separators=(",", ":")) + ";")

    total = sum(len(p["data"]) for pl in PP.values() for p in pl)
    print("datos_bloqueo.js generado |", len(PP), "equipos |", total, "bloqueos")

if __name__ == "__main__":
    main()
