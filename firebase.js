// ============================================================================
//  CASLA VOLEY — Sincronización con Firebase + Login
//
//  Mantiene la MISMA interfaz de siempre (fbSet, fbGet, fbPush, fbKey), así que
//  ninguna página necesita cambios. Lo nuevo es que cada lectura y cada
//  escritura viajan firmadas con la sesión del usuario, y si no hay sesión
//  aparece una pantalla de ingreso.
//
//  La sesión se guarda en el dispositivo y se renueva sola: se entra una vez
//  por celular/tablet/PC y después no vuelve a pedir nada.
//  Sin internet, la app sigue andando con lo último que quedó guardado.
// ============================================================================

var FB_URL  = 'https://casla-voley-default-rtdb.firebaseio.com';
var FB_KEY  = 'AIzaSyDQGKvsKCISVCehlUvx1tzwvDcG0lcGSIQ';   // clave pública del proyecto
var FB_DOM  = 'casla.app';        // dominio interno de las cuentas de jugadores
var FB_CLUB = 'CASLA';

/* ── estado de la sesión ────────────────────────────────────────────────── */
var FB_SES = null;        // {idToken, refreshToken, vence, email, uid}
var FB_OFF = false;       // true = sin internet, trabajando con lo guardado
var _fbListo = null;      // promesa: resuelve cuando hay sesión (o modo sin conexión)

function fbKey(path){
  return 'fb_' + path.replace(/[^a-zA-Z0-9]/g, '_');
}
function _fbLeerSes(){
  try{ return JSON.parse(localStorage.getItem('casla_sesion') || 'null'); }catch(e){ return null; }
}
function _fbGuardarSes(s){
  FB_SES = s;
  try{ s ? localStorage.setItem('casla_sesion', JSON.stringify(s))
         : localStorage.removeItem('casla_sesion'); }catch(e){}
}
function fbUser(){
  return FB_SES ? {email:FB_SES.email, uid:FB_SES.uid,
                   staff:(FB_SES.email||'').indexOf('@'+FB_DOM)<0} : null;
}
function fbLogout(){
  _fbGuardarSes(null);
  location.reload();
}

/* ── token: pide uno nuevo cuando está por vencer ───────────────────────── */
function _fbRefrescar(){
  if(!FB_SES || !FB_SES.refreshToken) return Promise.reject(new Error('sin sesion'));
  return fetch('https://securetoken.googleapis.com/v1/token?key=' + FB_KEY, {
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:'grant_type=refresh_token&refresh_token=' + encodeURIComponent(FB_SES.refreshToken)
    })
    .then(function(r){ return r.json(); })
    .then(function(d){
      if(!d || !d.id_token) throw new Error('sesion vencida');
      _fbGuardarSes({emitido:(FB_SES && FB_SES.emitido) || 0,   /* se conserva: NO se renueva al refrescar */ idToken:d.id_token, refreshToken:d.refresh_token,
                     vence:Date.now() + (parseInt(d.expires_in,10)||3600)*1000 - 60000,
                     email:FB_SES.email, uid:d.user_id || FB_SES.uid});
      return FB_SES.idToken;
    });
}
function _fbToken(){
  if(!FB_SES) return Promise.resolve('');
  if(FB_SES.idToken && Date.now() < (FB_SES.vence||0)) return Promise.resolve(FB_SES.idToken);
  return _fbRefrescar().catch(function(){ return ''; });
}
function _fbSufijo(){
  return _fbToken().then(function(t){ return t ? ('?auth=' + encodeURIComponent(t)) : ''; });
}

/* ── ingreso ────────────────────────────────────────────────────────────── */
function _fbEntrar(usuario, clave){
  var mail = (usuario||'').trim();
  if(mail.indexOf('@') < 0) mail = 'j' + mail.replace(/\D/g,'') + '@' + FB_DOM;   // jugador por número
  return fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + FB_KEY, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({email:mail, password:clave, returnSecureToken:true})
    })
    .then(function(r){ return r.json(); })
    .then(function(d){
      if(!d || !d.idToken){
        var m = (d && d.error && d.error.message) || 'ERROR';
        if(m.indexOf('PASSWORD')>=0 || m.indexOf('EMAIL_NOT_FOUND')>=0 || m.indexOf('INVALID_LOGIN')>=0)
          throw new Error('Usuario o codigo incorrecto');
        if(m.indexOf('TOO_MANY')>=0) throw new Error('Demasiados intentos. Espera un rato.');
        throw new Error('No pude entrar (' + m + ')');
      }
      _fbGuardarSes({emitido:Date.now(),   /* cuándo se abrió esta sesión */ idToken:d.idToken, refreshToken:d.refreshToken,
                     vence:Date.now() + (parseInt(d.expiresIn,10)||3600)*1000 - 60000,
                     email:mail, uid:d.localId});
      _fbRegistrarAcceso();   /* queda registrado quién entró y cuándo */
      return true;
    });
}

/* ── pantalla de ingreso ────────────────────────────────────────────────── */
function _fbPantalla(){
  return new Promise(function(resolve){
    var d = document.createElement('div');
    d.id = 'fb-login';
    d.innerHTML =
      '<style>'
      + '#fb-login{position:fixed;inset:0;z-index:2147483000;background:#080810;display:flex;'
      + 'align-items:center;justify-content:center;padding:18px;'
      + 'font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#eeeef5}'
      + '#fb-login .c{width:100%;max-width:360px}'
      + '#fb-login h1{font-size:22px;font-weight:800;margin:0 0 4px;letter-spacing:.5px}'
      + '#fb-login p{color:#6b6b84;font-size:13px;margin:0 0 20px;line-height:1.5}'
      + '#fb-login label{display:block;font-size:11px;letter-spacing:1.4px;text-transform:uppercase;'
      + 'color:#6b6b84;margin:0 0 6px}'
      + '#fb-login input{width:100%;box-sizing:border-box;background:#13131f;color:#fff;'
      + 'border:1px solid rgba(255,255,255,.14);border-radius:10px;padding:13px 14px;font-size:16px;'
      + 'outline:none;margin-bottom:14px}'
      + '#fb-login input:focus{border-color:#4ade80}'
      + '#fb-login button{width:100%;background:#4ade80;color:#08210f;border:0;border-radius:10px;'
      + 'padding:14px;font-size:16px;font-weight:800;cursor:pointer;letter-spacing:.5px}'
      + '#fb-login button:disabled{opacity:.55;cursor:default}'
      + '#fb-login .err{color:#f87171;font-size:13px;min-height:19px;margin:10px 0 0;text-align:center}'
      + '#fb-login .ay{color:#4b4b60;font-size:11.5px;margin-top:16px;text-align:center;line-height:1.6}'
      + '</style>'
      + '<div class="c">'
      + '<h1>' + FB_CLUB + '</h1>'
      + '<p>Entra una sola vez en este dispositivo. Despues queda abierto.</p>'
      + '<label for="fb-u">Tu numero o tu mail</label>'
      + '<input id="fb-u" autocomplete="username" placeholder="Ej: 7   -   profe@club.com">'
      + '<label for="fb-p">Codigo</label>'
      + '<input id="fb-p" type="password" autocomplete="current-password" placeholder="......">'
      + '<button id="fb-b">Entrar</button>'
      + '<div class="err" id="fb-e"></div>'
      + '<div class="ay">Los jugadores entran con su numero de camiseta.<br>'
      + 'Si no tenes codigo, pediselo al cuerpo tecnico.</div>'
      + '</div>';
    document.documentElement.appendChild(d);

    var u=d.querySelector('#fb-u'), p=d.querySelector('#fb-p'),
        b=d.querySelector('#fb-b'), e=d.querySelector('#fb-e');
    setTimeout(function(){ u.focus(); }, 80);

    function go(){
      var usuario=u.value.trim(), clave=p.value;
      if(!usuario || !clave){ e.textContent='Completa los dos campos'; return; }
      b.disabled=true; b.textContent='Entrando...'; e.textContent='';
      _fbEntrar(usuario, clave)
        .then(function(){ d.remove(); resolve(true); })
        .catch(function(err){
          b.disabled=false; b.textContent='Entrar';
          e.textContent = (err && err.message) ? err.message : 'No pude entrar';
          p.value=''; p.focus();
        });
    }
    b.addEventListener('click', go);
    [u,p].forEach(function(x){ x.addEventListener('keydown', function(ev){ if(ev.key==='Enter') go(); }); });
  });
}

/* ── arranque: recupera la sesion guardada o pide ingresar ──────────────── */

/* ══════════════════════════════════════════════════════════════════════════
   CONTROL DE SESIONES
   --------------------------------------------------------------------------
   La sesión se abre UNA vez por dispositivo y se renueva sola para siempre.
   Eso es cómodo, pero significaba que si una sesión quedaba abierta en una
   máquina ajena no había forma de cerrarla salvo cambiarle la contraseña a
   la persona (y eso echa a todos sus dispositivos, incluidos los propios).

   Ahora cada sesión guarda CUÁNDO se creó, y en la base hay una "fecha de
   corte". Si la sesión es anterior al corte, el dispositivo se cierra solo la
   próxima vez que abre la app — y borra también la llave de los datos, que si
   no quedaba guardada y permitía seguir leyendo los archivos cifrados.

   En la base de datos:
     sesiones/corte                    -> cierra TODAS las sesiones del club
     sesiones/corte_uid/<uid>          -> cierra las de un usuario
     sesiones/corte_disp/<uid>/<disp>  -> cierra un dispositivo puntual
     sesiones/dispositivos/<uid>/<disp> -> qué hay conectado (para poder verlo)
   ══════════════════════════════════════════════════════════════════════════ */

/* Identificador del dispositivo. Se inventa una vez y queda guardado acá. */
function _fbDispId(){
  try{
    var d = localStorage.getItem('nla_disp');
    if(!d){
      d = 'd' + Date.now().toString(36) + Math.random().toString(36).slice(2,8);
      localStorage.setItem('nla_disp', d);
    }
    return d;
  }catch(e){ return 'd0'; }
}

/* Cierra la sesión en ESTE dispositivo y borra todo lo sensible. */
function fbCerrarSesionLocal(motivo){
  /* Cada app guarda la sesión con SU propio nombre (nla_sesion en NÄFELS,
     casla_sesion en CASLA). Por eso no borramos la clave a mano: usamos la
     función de la propia app, que sabe cuál es. Si se borra la equivocada,
     la sesión sobrevive y el aviso vuelve a salir en bucle. */
  try{ _fbGuardarSes(null); }catch(e){}
  try{
    localStorage.removeItem('nla_sesion');      /* por las dudas, las dos variantes */
    localStorage.removeItem('casla_sesion');
    localStorage.removeItem('club_llave');      /* la llave de los datos también */
    localStorage.removeItem('vb_role');
    localStorage.removeItem('vb_player_num');
  }catch(e){}
  FB_SES = null;
  if(motivo){ try{ alert(motivo); }catch(e){} }
  try{ location.reload(); }catch(e){}
}

/* Deja constancia de este dispositivo, para poder verlos y elegir cuál cerrar. */
function _fbRegistrarDisp(){
  if(!FB_SES || !FB_SES.uid) return Promise.resolve();
  var ua = '';
  try{ ua = navigator.userAgent || ''; }catch(e){}
  var tipo = /iPad|Tablet/i.test(ua) ? 'Tablet'
           : /Android|iPhone|Mobile/i.test(ua) ? 'Celular' : 'Computadora';
  return _fbSufijo().then(function(q){
    return fetch(FB_URL + '/sesiones/dispositivos/' + FB_SES.uid + '/' + _fbDispId() + '.json' + q, {
      method:'PATCH', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ tipo:tipo, mail:FB_SES.email||'',
                             desde:(FB_SES.emitido||Date.now()), ultimo:Date.now() })
    });
  }).catch(function(){});
}

/* Se corre en cada arranque: mira si esta sesión fue dada de baja. */

/* Deja registrado cada INGRESO (cuando alguien pone mail y clave).
   No se anota cada vez que abre la app —eso sería un diluvio—, sólo cuando
   se crea una sesión nueva. Para "¿quién entró y cuándo?" es lo que importa. */
function _fbRegistrarAcceso(){
  if(!FB_SES || !FB_SES.uid) return;
  var ua = ''; try{ ua = navigator.userAgent || ''; }catch(e){}
  var tipo = /iPad|Tablet/i.test(ua) ? 'Tablet'
           : /Android|iPhone|Mobile/i.test(ua) ? 'Celular' : 'Computadora';
  var id = 'a' + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
  _fbSufijo().then(function(q){
    return fetch(FB_URL + '/sesiones/accesos/' + id + '.json' + q, {
      method:'PUT', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ uid:FB_SES.uid, mail:FB_SES.email||'',
                             cuando:Date.now(), tipo:tipo, disp:_fbDispId() })
    });
  }).catch(function(){});
}

function _fbControlSesion(){
  if(!FB_SES || !FB_SES.uid) return Promise.resolve();
  return _fbSufijo().then(function(q){
    return fetch(FB_URL + '/sesiones.json' + q).then(function(r){ return r.json(); });
  }).then(function(d){
    if(!d || d.error) return _fbRegistrarDisp();
    var emitido = FB_SES.emitido || 0;
    var disp    = _fbDispId();
    var corte   = parseInt(d.corte, 10) || 0;
    if(d.corte_uid && d.corte_uid[FB_SES.uid])
      corte = Math.max(corte, parseInt(d.corte_uid[FB_SES.uid], 10) || 0);
    if(d.corte_disp && d.corte_disp[FB_SES.uid] && d.corte_disp[FB_SES.uid][disp])
      corte = Math.max(corte, parseInt(d.corte_disp[FB_SES.uid][disp], 10) || 0);

    if(emitido < corte){
      fbCerrarSesionLocal('Tu sesión fue cerrada desde el club.\n\nVolvé a ingresar con tu usuario y tu clave.');
      return;
    }
    return _fbRegistrarDisp();
  }).catch(function(){});   /* sin internet no echamos a nadie */
}

function _fbArrancar(){
  if(_fbListo) return _fbListo;
  FB_SES = _fbLeerSes();
  _fbListo = new Promise(function(resolve){
    function pedir(){
      if(document.readyState === 'loading')
        document.addEventListener('DOMContentLoaded', function(){ _fbPantalla().then(function(){ return _fbControlSesion(); }).then(resolve); });
      else _fbPantalla().then(function(){ return _fbControlSesion(); }).then(resolve);
    }
    if(FB_SES && FB_SES.refreshToken){
      _fbRefrescar()
        .then(function(){ return _fbControlSesion(); })
        .then(function(){ resolve(true); })
        .catch(function(){
          if(!navigator.onLine){ FB_OFF = true; resolve(true); }   /* sin internet: seguimos con lo guardado */
          else { _fbGuardarSes(null); pedir(); }                   /* sesion vencida: pedimos ingresar */
        });
    } else if(!navigator.onLine){
      FB_OFF = true; resolve(true);
    } else {
      pedir();
    }
  });
  return _fbListo;
}
_fbArrancar();

/* ── API de siempre, ahora firmada ──────────────────────────────────────── */
function fbSet(path, value){
  try{ localStorage.setItem(fbKey(path), JSON.stringify(value)); }catch(e){}
  _fbArrancar().then(_fbSufijo).then(function(q){
    if(FB_OFF) return;
    fetch(FB_URL + '/' + path + '.json' + q, {
      method:'PUT', headers:{'Content-Type':'application/json'},
      body: JSON.stringify(value)
    }).catch(function(){});
  });
}

function fbGet(path, callback){
  function local(){
    try{
      var v = localStorage.getItem(fbKey(path));
      callback(v ? JSON.parse(v) : null);
    }catch(e){ callback(null); }
  }
  _fbArrancar().then(_fbSufijo).then(function(q){
    if(FB_OFF) return local();
    fetch(FB_URL + '/' + path + '.json' + q)
      .then(function(r){ return r.json(); })
      .then(function(data){
        if(data !== null && data !== undefined && !(data && data.error)){
          try{ localStorage.setItem(fbKey(path), JSON.stringify(data)); }catch(e){}
          callback(data);
        } else local();
      })
      .catch(local);
  }).catch(local);
}

function fbPush(path, value){
  try{
    var arr = JSON.parse(localStorage.getItem(fbKey(path)) || '[]');
    arr.push(value);
    localStorage.setItem(fbKey(path), JSON.stringify(arr));
  }catch(e){}
  _fbArrancar().then(_fbSufijo).then(function(q){
    if(FB_OFF) return;
    fetch(FB_URL + '/' + path + '.json' + q, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify(value)
    }).catch(function(){});
  });
}
