window.OBJETIVOS_CONFIG = {
  metas: {
    sq:    {label:'% Saque',   obj:3,  min:-12,max:8,  g2:3,  g1:-3, y:-8},
    rec:   {label:'% Recep.',  obj:36, min:20, max:44, g2:36, g1:30, y:25},
    bqpos: {label:'Blq #+',    obj:43, min:25, max:52, g2:43, g1:37, y:30},
    bqpt:  {label:'% Blq #',   obj:23, min:12, max:28, g2:23, g1:20, y:17},
    atqq:  {label:'Atq Quick', obj:48, min:35, max:56, g2:48, g1:44, y:40},
    atqhb: {label:'Atq HB',    obj:20, min:8,  max:26, g2:20, g1:16, y:12},
    atqx:  {label:'Atq X',     obj:42, min:28, max:50, g2:42, g1:38, y:34},
    atqrp: {label:'Atq R#+',   obj:50, min:32, max:58, g2:50, g1:44, y:38},
    atqri: {label:'Atq R!',    obj:36, min:22, max:44, g2:36, g1:32, y:28},
    atqrm: {label:'Atq R-',    obj:26, min:14, max:34, g2:26, g1:22, y:18},
    atqtr: {label:'Atq TR',    obj:34, min:22, max:42, g2:34, g1:30, y:26}
  }
};

function objClassify(id,val){
  var m=window.OBJETIVOS_CONFIG.metas[id];
  if(val>=m.g2) return{color:'#22c55e',bg:'rgba(34,197,94,.1)',   border:'rgba(34,197,94,.35)',  label:'Objetivo'};
  if(val>=m.g1) return{color:'#86efac',bg:'rgba(134,239,172,.08)',border:'rgba(134,239,172,.3)', label:'Cerca'};
  if(val>=m.y)  return{color:'#fbbf24',bg:'rgba(251,191,36,.1)',  border:'rgba(251,191,36,.3)',  label:'Neutro'};
  return              {color:'#ef4444',bg:'rgba(239,68,68,.1)',   border:'rgba(239,68,68,.3)',   label:'Lejos'};
}
function objClassifyVsTeam(val,teamVal){
  if(teamVal===null||teamVal===undefined) return{color:'#64748b',bg:'rgba(100,116,139,.08)',border:'rgba(100,116,139,.2)',label:'—'};
  var d=val-teamVal;
  if(d>=5)  return{color:'#22c55e',bg:'rgba(34,197,94,.1)',   border:'rgba(34,197,94,.35)',  label:'Sobre equipo'};
  if(d>=0)  return{color:'#86efac',bg:'rgba(134,239,172,.08)',border:'rgba(134,239,172,.3)', label:'Cerca equipo'};
  if(d>=-8) return{color:'#fbbf24',bg:'rgba(251,191,36,.1)',  border:'rgba(251,191,36,.3)',  label:'Neutro'};
  return         {color:'#ef4444',bg:'rgba(239,68,68,.1)',   border:'rgba(239,68,68,.3)',   label:'Bajo equipo'};
}
function objPct(v,mn,mx){return Math.max(0,Math.min(100,(v-mn)/(mx-mn)*100));}
function objFmt(v){return(v<0?'-':'')+Math.abs(v)+'%';}

function objCalcVals(nombreJugador){
  var D=window.HISTORIAL_DATA; if(!D) return {};
  var acum={sT:0,sPunto:0,sPos:0,sVend:0,sErr:0,rT:0,rPunto:0,rPos:0,rVend:0,rErr:0,aT:0,aPunto:0,aVend:0,aErr:0,bT:0,bPt:0,bPtPos:0,mbT:0,mbPt:0,mbVnd:0,mbErr:0};
  var CENTRALES=[2,10,15,17];
  D.entrenamientos.forEach(function(s){
    s.jugadores.forEach(function(j){
      if(j.n==='TOTALES EQUIPO') return;
      if(nombreJugador && j.n!==nombreJugador) return;
      acum.sT+=j.sT||0;acum.sPunto+=j.sPunto||0;acum.sPos+=j.sPos||0;acum.sVend+=j.sVend||0;acum.sErr+=j.sErr||0;
      acum.rT+=j.rT||0;acum.rPunto+=j.rPunto||0;acum.rPos+=j.rPos||0;acum.rVend+=j.rVend||0;acum.rErr+=j.rErr||0;
      acum.aT+=j.aT||0;acum.aPunto+=j.aPunto||0;acum.aVend+=j.aVend||0;acum.aErr+=j.aErr||0;
      acum.bT+=j.bT||0;acum.bPt+=j.bPt||0;acum.bPtPos+=j.bPtPos||0;
      if(!nombreJugador&&CENTRALES.indexOf(j.c)>=0){acum.mbT+=j.aT||0;acum.mbPt+=j.aPunto||0;acum.mbVnd+=j.aVend||0;acum.mbErr+=j.aErr||0;}
    });
  });
  var v={};
  v.sq    =acum.sT>0?Math.round((acum.sPunto+0.5*acum.sVend+0.25*acum.sPos-acum.sErr)/acum.sT*100):null;
  v.rec   =acum.rT>0?Math.round((acum.rPunto+0.5*acum.rPos-0.5*acum.rVend-acum.rErr)/acum.rT*100):null;
  v.bqpos =acum.bT>0?Math.round((acum.bPt+acum.bPtPos)/acum.bT*100):null;
  v.bqpt  =acum.bT>0?Math.round(acum.bPt/acum.bT*100):null;
  v.atqhb =acum.mbT>0?Math.round((acum.mbPt-acum.mbVnd-acum.mbErr)/acum.mbT*100):null;
  return v;
}

// ── Single battery HTML ──────────────────────────────────────────
function objSingleBat(id, val, meta, cls, objLine){
  var fh  = val!==null ? objPct(val,meta.min,meta.max) : 0;
  var oh  = objPct(objLine,meta.min,meta.max);
  var txt = val!==null ? objFmt(val) : '—';
  return '<div style="flex:1;min-width:60px;max-width:110px;display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 5px 8px;border:0.5px solid '+cls.border+';border-radius:10px;background:'+cls.bg+';position:relative;overflow:hidden;font-family:Barlow Condensed,sans-serif">'
    +'<div style="position:absolute;top:0;left:0;right:0;height:3px;background:'+cls.color+';border-radius:10px 10px 0 0"></div>'
    +'<div style="font-size:22px;font-weight:900;line-height:1;color:'+cls.color+'">'+txt+'</div>'
    +'<div style="width:32px;height:68px;display:flex;flex-direction:column;align-items:center">'
      +'<div style="width:14px;height:5px;border-radius:2px 2px 0 0;background:'+cls.color+';opacity:.7;flex-shrink:0"></div>'
      +'<div style="position:relative;width:32px;flex:1;border-radius:3px;overflow:hidden;border:2px solid '+cls.color+'">'
        +'<div style="position:absolute;inset:0;background:#07080f"></div>'
        +(val!==null?'<div style="position:absolute;bottom:0;left:0;right:0;height:'+fh+'%;background:'+cls.color+'"></div>':'')
        +'<div style="position:absolute;bottom:25%;left:0;right:0;height:1px;background:#fff;opacity:.15"></div>'
        +'<div style="position:absolute;bottom:50%;left:0;right:0;height:1px;background:#fff;opacity:.15"></div>'
        +'<div style="position:absolute;bottom:75%;left:0;right:0;height:1px;background:#fff;opacity:.15"></div>'
        +'<div style="position:absolute;bottom:'+oh+'%;left:-2px;right:-2px;display:flex;align-items:center;z-index:3">'
          +'<div style="width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-right:4px solid rgba(255,255,255,.9)"></div>'
          +'<div style="flex:1;height:2px;background:rgba(255,255,255,.9)"></div>'
          +'<div style="width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid rgba(255,255,255,.9)"></div>'
        +'</div>'
      +'</div>'
    +'</div>'
    +'<div style="font-size:8px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;padding:2px 5px;border-radius:20px;background:'+cls.color+'22;color:'+cls.color+'">'+cls.label+'</div>'
    +'</div>';
}

// ── Render equipo (single row) ───────────────────────────────────
function renderObjetivos(containerId, extra){
  var el=document.getElementById(containerId); if(!el) return;
  var metas=window.OBJETIVOS_CONFIG.metas;
  var vals=Object.assign({},objCalcVals(null),extra||{});

  var html='<div style="font-family:Barlow Condensed,sans-serif;padding:4px 0 8px">'
    +'<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:10px">'
    +'<div style="font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#64748b">OBJETIVOS DEL EQUIPO · 2026</div>'
    +'<div style="display:flex;gap:10px;flex-wrap:wrap">'
    +[['#22c55e','Objetivo'],['#86efac','Cerca'],['#fbbf24','Neutro'],['#ef4444','Lejos']].map(function(x){
      return '<div style="display:flex;align-items:center;gap:4px;font-size:9px;color:#64748b"><div style="width:7px;height:7px;border-radius:50%;background:'+x[0]+'"></div>'+x[1]+'</div>';
    }).join('')+'</div></div>'
    // Labels row
    +'<div style="display:flex;gap:8px;width:100%;margin-bottom:4px">'
    +Object.keys(metas).map(function(id){
      return '<div style="flex:1;min-width:60px;max-width:110px;text-align:center;font-size:8px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#64748b">'+metas[id].label+'</div>';
    }).join('')+'</div>'
    // Batteries row
    +'<div style="display:flex;gap:8px;width:100%">'
    +Object.keys(metas).map(function(id){
      var m=metas[id], val=vals[id]!==undefined?vals[id]:null;
      var cls=val!==null?objClassify(id,val):{color:'#334155',bg:'rgba(51,65,85,.08)',border:'rgba(51,65,85,.2)',label:'—'};
      return objSingleBat(id,val,m,cls,m.obj);
    }).join('')+'</div></div>';

  el.innerHTML=html;
}

// ── Render individual (two rows: jugador + equipo) ───────────────
function renderObjetivosJugador(containerId, nombreJugador, extra){
  var el=document.getElementById(containerId); if(!el) return;
  var metas=window.OBJETIVOS_CONFIG.metas;
  var jugVals=Object.assign({},objCalcVals(nombreJugador),extra||{});
  var eqVals=objCalcVals(null);

  var rows=[
    {label:'Jugador',titulo:nombreJugador,vals:jugVals,isJug:true},
    {label:'Equipo', titulo:'EQUIPO',     vals:eqVals, isJug:false}
  ];

  var html='<div style="font-family:Barlow Condensed,sans-serif;padding:4px 0 8px">'
    +'<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:10px">'
    +'<div style="font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#64748b">MI PERFORMANCE VS EQUIPO</div>'
    +'<div style="display:flex;gap:10px;flex-wrap:wrap">'
    +[['#22c55e','Sobre equipo'],['#86efac','Cerca'],['#fbbf24','Neutro'],['#ef4444','Bajo equipo']].map(function(x){
      return '<div style="display:flex;align-items:center;gap:4px;font-size:9px;color:#64748b"><div style="width:7px;height:7px;border-radius:50%;background:'+x[0]+'"></div>'+x[1]+'</div>';
    }).join('')+'</div></div>'
    // Labels row (shared)
    +'<div style="display:flex;gap:8px;width:100%;margin-bottom:4px">'
    +'<div style="width:64px;flex-shrink:0"></div>'
    +Object.keys(metas).map(function(id){
      return '<div style="flex:1;min-width:60px;max-width:110px;text-align:center;font-size:8px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#64748b">'+metas[id].label+'</div>';
    }).join('')+'</div>';

  rows.forEach(function(row){
    html+='<div style="display:flex;align-items:center;gap:8px;width:100%;margin-bottom:8px">'
      // Row label
      +'<div style="width:64px;flex-shrink:0;font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#94a3b8;text-align:right;padding-right:8px">'+row.label+'</div>'
      // Batteries
      +Object.keys(metas).map(function(id){
        var m=metas[id];
        var val=row.vals[id]!==undefined?row.vals[id]:null;
        var cls, objLine;
        if(row.isJug){
          // Jugador: color vs equipo, line = equipo value
          var eqVal=eqVals[id]!==undefined?eqVals[id]:null;
          cls=val!==null?objClassifyVsTeam(val,eqVal):{color:'#334155',bg:'rgba(51,65,85,.08)',border:'rgba(51,65,85,.2)',label:'—'};
          objLine=eqVal!==null?eqVal:m.obj;
        } else {
          // Equipo: color vs objetivo, line = objetivo
          cls=val!==null?objClassify(id,val):{color:'#334155',bg:'rgba(51,65,85,.08)',border:'rgba(51,65,85,.2)',label:'—'};
          objLine=m.obj;
        }
        return objSingleBat(id,val,m,cls,objLine);
      }).join('')
      +'</div>';
  });

  html+='</div>';
  el.innerHTML=html;
}

/* ════════════════════════════════════════════════════════════════════
   MOTOR DE BATERÍAS EN VIVO — port fiel de baterias_engine.py
   Calcula las 11 baterías desde los códigos crudos del scout (M.codes).
   ════════════════════════════════════════════════════════════════════ */
function _batNuevo(){
  var na=function(){return {'#':0,'/':0,'=':0,'T':0};};
  return {S:{'#':0,'+':0,'/':0,'=':0,'T':0},
          R:{'#':0,'+':0,'/':0,'=':0,'T':0},
          B:{'#':0,'+':0,'T':0},
          Aall:na(), cent:na(), alta:na(), rap:na(),
          rp:na(), ri:na(), rm:na(), tr:na()};
}
/* calcula acumuladores por jugador para un lado ('*' local, 'a' visitante) */
function calcBaterias(codes, side){
  var pl={};
  var get=function(num){ if(!pl[num]) pl[num]=_batNuevo(); return pl[num]; };
  var last_rec=null, rec_valida=false;
  for(var i=0;i<codes.length;i++){
    var l=(codes[i].c||'').trim();
    if(l.length<5) continue;
    var pfx=l[0]; var body=l.slice(1).split(';')[0];
    if(body.length<5 || !/^\d\d/.test(body)) continue;
    var num=body.slice(0,2), skill=body[2], res=body[4];
    if(skill==='S'){
      last_rec=null; rec_valida=false;
      if(pfx===side){ var P=get(num); P.S.T++; if(res in P.S) P.S[res]++; }
    } else if(skill==='R' && pfx===side){
      last_rec=res; rec_valida=true;
      var Pr=get(num); Pr.R.T++; if(res in Pr.R) Pr.R[res]++;
    } else if(pfx!==side && (skill==='A'||skill==='D'||skill==='E'||skill==='B')){
      rec_valida=false;
    } else if(skill==='B' && pfx===side){
      var Pb=get(num); Pb.B.T++; if(res in Pb.B) Pb.B[res]++;
    } else if(skill==='A' && pfx===side){
      var tipo=body[3];  /* Q=central · H=alta · T=rápida */
      var cat;
      if(last_rec!==null && rec_valida){
        rec_valida=false;
        cat = (last_rec==='#'||last_rec==='+')?'rp' : last_rec==='!'?'ri' : last_rec==='-'?'rm' : 'tr';
      } else cat='tr';
      var Pa=get(num);
      Pa.Aall.T++; if(res in Pa.Aall) Pa.Aall[res]++;
      if(tipo==='Q'){ Pa.cent.T++; if(res in Pa.cent) Pa.cent[res]++; }
      else if(tipo==='T'){ Pa.rap.T++; if(res in Pa.rap) Pa.rap[res]++; }
      else if(tipo==='H'){ Pa.alta.T++; if(res in Pa.alta) Pa.alta[res]++; }
      Pa[cat].T++; if(res in Pa[cat]) Pa[cat][res]++;
    }
  }
  /* equipo = suma de todos */
  var eq=_batNuevo();
  Object.keys(pl).forEach(function(n){
    var P=pl[n];
    Object.keys(P).forEach(function(sec){
      Object.keys(P[sec]).forEach(function(k){ eq[sec][k]+=P[sec][k]; });
    });
  });
  pl['__EQUIPO__']=eq;
  return pl;
}
/* Redondeo bancario (igual que round() de Python): .5 va al par más cercano.
   Necesario para que los números coincidan EXACTO con el dashboard oficial. */
function roundPy(x){
  var r=Math.round(x);
  if(Math.abs(x-Math.trunc(x))===0.5){ r=2*Math.round(x/2); }
  return r;
}
/* acumuladores -> 11 baterías en % (fórmulas exactas del engine) */
function batToPcts(P){
  var atk=function(d){ return d.T ? roundPy((d['#']-d['/']-d['='])/d.T*100) : null; };
  var S=P.S, R=P.R, B=P.B;
  return {
    sq:    S.T ? roundPy((S['#']+0.5*S['/']+0.25*S['+']-S['='])/S.T*100) : null,
    rec:   R.T ? roundPy((R['#']+0.5*R['+']-0.5*R['/']-R['='])/R.T*100) : null,
    bqpos: B.T ? roundPy((B['#']+B['+'])/B.T*100) : null,
    bqpt:  B.T ? roundPy(B['#']/B.T*100) : null,
    atqq:  atk(P.cent),
    atqhb: atk(P.alta),
    atqx:  atk(P.rap),
    atqrp: atk(P.rp),
    atqri: atk(P.ri),
    atqrm: atk(P.rm),
    atqtr: atk(P.tr)
  };
}
/* API para el panel: dado el lado, devuelve {jugadores:{num:vals}, equipo:vals} */
window.bateriasVivo = function(codes, side){
  var acum = calcBaterias(codes||[], side);
  var out = {jugadores:{}, equipo:null};
  Object.keys(acum).forEach(function(num){
    var v = batToPcts(acum[num]);
    if(num==='__EQUIPO__') out.equipo=v; else out.jugadores[num]=v;
  });
  return out;
};

/* ── Render de las baterías: fila Jugador vs fila Equipo (diseño del dashboard) ── */
function renderBaterias(containerId, jugVals, eqVals, titulo, rivalVals){
  var el=document.getElementById(containerId); if(!el) return;
  var metas=window.OBJETIVOS_CONFIG.metas;
  var rows=[{label:'Jugador',vals:jugVals||{},isJug:true},{label:'Equipo',vals:eqVals||{},isJug:false}];
  if(rivalVals){ rows.push({label:'__SEP__',vals:{},isJug:false,sep:true}); rows.push({label:'Rival',vals:rivalVals||{},isJug:false,esRival:true}); }
  var html='<div style="font-family:Barlow Condensed,sans-serif;padding:4px 0 8px">'
    +'<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:10px">'
    +'<div style="font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#64748b">'+(titulo||'BATERÍAS')+'</div>'
    +'<div style="display:flex;gap:10px;flex-wrap:wrap">'
    +[['#22c55e','Sobre equipo'],['#86efac','Cerca'],['#fbbf24','Neutro'],['#ef4444','Bajo equipo']].map(function(x){
      return'<div style="display:flex;align-items:center;gap:4px;font-size:9px;color:#64748b"><div style="width:7px;height:7px;border-radius:50%;background:'+x[0]+'"></div>'+x[1]+'</div>';
    }).join('')+'</div></div>'
    +'<div style="display:flex;gap:8px;width:100%;margin-bottom:4px">'
    +'<div style="width:64px;flex-shrink:0"></div>'
    +Object.keys(metas).map(function(id){
      return '<div style="flex:1;min-width:60px;text-align:center;padding:4px 2px">'
        +'<div style="font-size:10px;font-weight:800;color:#e2e8f0;letter-spacing:0.5px;text-transform:uppercase;line-height:1.3;word-break:break-word">'+metas[id].label+'</div>'
        +'<div style="font-size:10px;color:#22c55e;font-weight:700;margin-top:3px">'+metas[id].obj+'%</div>'
        +'</div>';
    }).join('')
    +'</div>';
  rows.forEach(function(row){
    if(row.sep){ html+='<div style="height:1px;background:rgba(255,255,255,.1);margin:10px 0 12px"></div>'; return; }
    var lblColor = row.esRival ? '#f87171' : '#94a3b8';
    html+='<div style="display:flex;align-items:center;gap:8px;width:100%;margin-bottom:8px">'
      +'<div style="width:64px;flex-shrink:0;font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:'+lblColor+';text-align:right;padding-right:8px">'+row.label+'</div>'
      +Object.keys(metas).map(function(id){
        var m=metas[id], val=row.vals[id]!==undefined && row.vals[id]!==null ? row.vals[id] : null;
        var cls, objLine;
        if(row.isJug){
          var eq=(eqVals&&eqVals[id]!==undefined&&eqVals[id]!==null)?eqVals[id]:null;
          cls=val!==null?objClassifyVsTeam(val,eq):{color:'#334155',bg:'rgba(51,65,85,.08)',border:'rgba(51,65,85,.2)',label:'—'};
          objLine=eq!==null?eq:m.obj;
        } else {
          cls=val!==null?objClassify(id,val):{color:'#334155',bg:'rgba(51,65,85,.08)',border:'rgba(51,65,85,.2)',label:'—'};
          objLine=m.obj;
        }
        return objSingleBat(id,val,m,cls,objLine);
      }).join('')+'</div>';
  });
  html+='</div>';
  el.innerHTML=html;
}
