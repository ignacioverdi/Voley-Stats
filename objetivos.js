// ================================================================
// CASLA VOLEY — Componente de Objetivos
// Uso: <div id="objetivos-panel"></div>
//      renderObjetivos('objetivos-panel')   ← equipo
//      renderObjetivos('objetivos-panel', nombreJugador)  ← individual
// ================================================================
window.OBJETIVOS_CONFIG = {
  metas: {
    sq:    {label:'% Saque',   obj:3,  min:-12, max:8,  g2:3,   g1:-3,  y:-8},
    rec:   {label:'% Recep.',  obj:36, min:20,  max:44, g2:36,  g1:30,  y:25},
    bqpos: {label:'Blq #+',    obj:43, min:25,  max:52, g2:43,  g1:37,  y:30},
    bqpt:  {label:'% Blq #',   obj:23, min:12,  max:28, g2:23,  g1:20,  y:17},
    atqq:  {label:'Atq Quick', obj:48, min:35,  max:56, g2:48,  g1:44,  y:40},
    atqhb: {label:'Atq HB',    obj:20, min:8,   max:26, g2:20,  g1:16,  y:12},
    atqx:  {label:'Atq X',     obj:42, min:28,  max:50, g2:42,  g1:38,  y:34},
    atqrp: {label:'Atq R#+',   obj:50, min:32,  max:58, g2:50,  g1:44,  y:38},
    atqri: {label:'Atq R!',    obj:36, min:22,  max:44, g2:36,  g1:32,  y:28},
    atqrm: {label:'Atq R-',    obj:26, min:14,  max:34, g2:26,  g1:22,  y:18},
    atqtr: {label:'Atq TR',    obj:34, min:22,  max:42, g2:34,  g1:30,  y:26},
  }
};

// POS_CENTRALES para calcular ATQ MB automáticamente
var OBJ_CENTRALES = [2,10,15,17]; // OJUEZ, VIERA, ROTEZZI, HERBSOMMER

function objClassify(id, val){
  var m = window.OBJETIVOS_CONFIG.metas[id];
  if(!m) return {color:'#64748b', bg:'rgba(100,116,139,.1)', border:'rgba(100,116,139,.3)', label:'—'};
  if(val >= m.g2) return {color:'#22c55e', bg:'rgba(34,197,94,.1)',    border:'rgba(34,197,94,.35)',    label:'Objetivo'};
  if(val >= m.g1) return {color:'#86efac', bg:'rgba(134,239,172,.08)', border:'rgba(134,239,172,.3)',   label:'Cerca'};
  if(val >= m.y)  return {color:'#fbbf24', bg:'rgba(251,191,36,.1)',   border:'rgba(251,191,36,.3)',    label:'Neutro'};
  return                 {color:'#ef4444', bg:'rgba(239,68,68,.1)',    border:'rgba(239,68,68,.3)',     label:'Lejos'};
}

function objPct(v, min, max){ return Math.max(0, Math.min(100, (v - min) / (max - min) * 100)); }
function objFmt(v){ return (v < 0 ? '-' : '') + Math.abs(v) + '%'; }

function objCalcFromHistorial(nombreJugador){
  var D = window.HISTORIAL_DATA;
  if(!D || !D.entrenamientos) return null;

  // Use all sessions or filter by tipo if needed
  var sesiones = D.entrenamientos;
  var acum = {
    sT:0, sPunto:0, sPos:0, sOvp:0, sVend:0, sNeg:0, sErr:0,
    rT:0, rPunto:0, rPos:0, rOvp:0, rVend:0, rNeg:0, rErr:0,
    aT:0, aPunto:0, aPos:0, aOvp:0, aNeg:0, aVend:0, aErr:0,
    bT:0, bPt:0, bPtPos:0,
    aMB_T:0, aMB_Pt:0, aMB_Vnd:0, aMB_Err:0
  };

  sesiones.forEach(function(s){
    s.jugadores.forEach(function(j){
      if(j.n === 'TOTALES EQUIPO') return;
      var match = nombreJugador ? (j.n === nombreJugador) : true;
      if(!match) return;

      acum.sT+=j.sT||0; acum.sPunto+=j.sPunto||0; acum.sPos+=j.sPos||0;
      acum.sOvp+=j.sOvp||0; acum.sVend+=j.sVend||0; acum.sNeg+=j.sNeg||0; acum.sErr+=j.sErr||0;
      acum.rT+=j.rT||0; acum.rPunto+=j.rPunto||0; acum.rPos+=j.rPos||0;
      acum.rOvp+=j.rOvp||0; acum.rVend+=j.rVend||0; acum.rNeg+=j.rNeg||0; acum.rErr+=j.rErr||0;
      acum.aT+=j.aT||0; acum.aPunto+=j.aPunto||0; acum.aPos+=j.aPos||0;
      acum.aOvp+=j.aOvp||0; acum.aNeg+=j.aNeg||0; acum.aVend+=j.aVend||0; acum.aErr+=j.aErr||0;
      acum.bT+=j.bT||0; acum.bPt+=j.bPt||0; acum.bPtPos+=j.bPtPos||0;

      // ATQ MB = centrales (sin filtro de jugador individual)
      if(!nombreJugador && OBJ_CENTRALES.indexOf(j.c) >= 0){
        acum.aMB_T  +=j.aT||0; acum.aMB_Pt +=j.aPunto||0;
        acum.aMB_Vnd+=j.aVend||0; acum.aMB_Err+=j.aErr||0;
      }
    });
  });

  var vals = {};
  vals.sq    = acum.sT>0 ? Math.round((1*acum.sPunto+0.5*acum.sVend+0.25*acum.sPos-1*acum.sErr)/acum.sT*100) : null;
  vals.rec   = acum.rT>0 ? Math.round((1*acum.rPunto+0.5*acum.rPos-0.5*acum.rVend-1*acum.rErr)/acum.rT*100) : null;
  vals.bqpos = acum.bT>0 ? Math.round((acum.bPt+acum.bPtPos)/acum.bT*100) : null;
  vals.bqpt  = acum.bT>0 ? Math.round(acum.bPt/acum.bT*100) : null;
  // ATQ types — from dv4 would need specific combo mapping; show null for now if no manual data
  vals.atqq  = null; vals.atqhb = null; vals.atqx  = null;
  vals.atqrp = null; vals.atqri = null; vals.atqrm = null;
  vals.atqtr = null;
  // ATQ MB from centrales
  vals.atqhb = acum.aMB_T>0 ? Math.round((acum.aMB_Pt-acum.aMB_Vnd-acum.aMB_Err)/acum.aMB_T*100) : null;

  return vals;
}

function objBateria(id, val, meta){
  var c   = objClassify(id, val);
  var fh  = objPct(val, meta.min, meta.max);
  var oh  = objPct(meta.obj, meta.min, meta.max);
  var txt = val !== null ? objFmt(val) : '—';

  return '<div style="width:78px;flex-shrink:0;border:0.5px solid '+c.border+';border-radius:10px;padding:10px 6px 8px;display:flex;flex-direction:column;align-items:center;gap:6px;position:relative;overflow:hidden;background:'+c.bg+';font-family:Barlow Condensed,sans-serif">'
    +'<div style="position:absolute;top:0;left:0;right:0;height:3px;background:'+c.color+';border-radius:10px 10px 0 0"></div>'
    +'<div style="font-size:7.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#64748b;text-align:center;line-height:1.3">'+meta.label+'</div>'
    +'<div style="font-size:19px;font-weight:900;line-height:1;color:'+c.color+'">'+txt+'</div>'
    // battery
    +'<div style="position:relative;width:26px;height:56px;display:flex;flex-direction:column;align-items:center">'
      +'<div style="width:11px;height:4px;border-radius:2px 2px 0 0;background:'+c.color+';opacity:.7;flex-shrink:0"></div>'
      +'<div style="position:relative;width:26px;flex:1;border-radius:3px;overflow:hidden;border:2px solid '+c.color+'">'
        +'<div style="position:absolute;inset:0;background:var(--bg,#07080f)"></div>'
        // fill
        +(val!==null?'<div style="position:absolute;bottom:0;left:0;right:0;height:'+fh+'%;background:'+c.color+';border-radius:1px"></div>':'')
        // segments
        +'<div style="position:absolute;bottom:25%;left:0;right:0;height:1px;background:#fff;opacity:.2"></div>'
        +'<div style="position:absolute;bottom:50%;left:0;right:0;height:1px;background:#fff;opacity:.2"></div>'
        +'<div style="position:absolute;bottom:75%;left:0;right:0;height:1px;background:#fff;opacity:.2"></div>'
        // objective line
        +'<div style="position:absolute;bottom:'+oh+'%;left:-2px;right:-2px;display:flex;align-items:center;z-index:3">'
          +'<div style="width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-right:4px solid rgba(255,255,255,.85)"></div>'
          +'<div style="flex:1;height:2px;background:rgba(255,255,255,.85);border-radius:1px"></div>'
          +'<div style="width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid rgba(255,255,255,.85)"></div>'
        +'</div>'
      +'</div>'
    +'</div>'
    +'<div style="font-size:7.5px;color:#64748b">obj '+meta.obj+'%</div>'
    +'<div style="font-size:7px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;padding:2px 5px;border-radius:20px;background:'+c.color+'22;color:'+c.color+'">'+c.label+'</div>'
    +'</div>';
}

function renderObjetivos(containerId, nombreJugador, valoresManual){
  var el = document.getElementById(containerId);
  if(!el) return;

  var metas = window.OBJETIVOS_CONFIG.metas;
  // Get calculated values from historial
  var calcVals = objCalcFromHistorial(nombreJugador) || {};
  // Merge with manual override (for ATQ types not auto-calculated)
  var vals = Object.assign({}, calcVals, valoresManual || {});

  var titulo = nombreJugador ? ('Objetivos — ' + nombreJugador) : 'Objetivos del equipo · 2026';

  var html =
    '<div style="font-family:Barlow Condensed,sans-serif">'
    +'<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:14px">'
      +'<div style="font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#64748b">'+titulo+'</div>'
      +'<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">'
        +['#22c55e:Objetivo','#86efac:Cerca','#fbbf24:Neutro','#ef4444:Lejos'].map(function(s){
          var p=s.split(':');
          return '<div style="display:flex;align-items:center;gap:4px;font-size:9px;color:#64748b">'
            +'<div style="width:7px;height:7px;border-radius:50%;background:'+p[0]+'"></div>'+p[1]+'</div>';
        }).join('')
      +'</div>'
    +'</div>'
    +'<div style="overflow-x:auto;padding-bottom:4px">'
    +'<div style="display:flex;gap:8px;width:max-content">';

  Object.keys(metas).forEach(function(id){
    var val = vals[id] !== undefined && vals[id] !== null ? vals[id] : null;
    html += objBateria(id, val, metas[id]);
  });

  html += '</div></div></div>';
  el.innerHTML = html;
}
