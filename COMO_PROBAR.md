# ✅ CÓMO PROBAR QUE TODO FUNCIONA

## Parte 1: En tu compu (probar el .bat)

### Prueba rápida (5 minutos)
1. Descomprimí `paquete_casla.zip` dentro de tu carpeta VOLEY CASLA
2. Poné 2 o 3 archivos .dvw de prueba en la carpeta "DVW CASLA 2026"
3. Doble-clic en `correr_casla.bat`
4. **Qué tenés que ver:**
   - "Temporada detectada: DVW CASLA 2026"
   - "Archivos DVW encontrados: 3" (o los que pusiste)
   - Lista de armadores por equipo
   - "liga_data.js (X combos, 12 equipos con armadores)"
   - "LISTO"
5. **Verificá que se crearon estos archivos en la carpeta:**
   - liga_data.js
   - casla_stats_table.html
   - datos_partidos.js
   - videos.js
   - proximo_rival.js

### Si algo falla:
- "No se encontro Python" → instalá Python desde python.org
- "No encontre carpeta DVW CASLA" → revisá que la carpeta se llame exactamente así
- Error rojo → sacale una foto a la pantalla y me lo mostrás

## Parte 2: En la web (probar que se ve bien)

1. Subí a GitHub (Voley-Stats) los 5 archivos generados
2. Esperá 1 minuto (Vercel despliega)
3. Entrá a voley-stats-iota.vercel.app
4. **Verificá:**
   - [ ] En el hub aparece "Game Plan vs UBA" destacado arriba (amarillo)
   - [ ] Tocás y abre el game plan de UBA
   - [ ] Los heatmaps cargan (hm_ataque.html?equipo=uba)
   - [ ] La tabla de stats muestra los jugadores
   - [ ] El botón DIG aparece en las X5/X6 y abre la defensa

## Parte 3: Prueba de acumulación (importante)
1. Corré el .bat una vez (anota cuántos partidos dice)
2. Agregá MÁS partidos a la carpeta
3. Corré el .bat de nuevo
4. **Tiene que decir:** "X added, Y skipped" (saltea los que ya estaban)
   → Esto confirma que acumula sin duplicar

## Lo que YO ya probé y funciona:
✓ El paquete se descomprime bien
✓ El .bat procesa los DVW y genera los 5 archivos
✓ Acumula sin duplicar (20 + 22 nuevos = 42, sin repetir)
✓ Detecta los 2 armadores automáticamente
✓ El liga_data generado funciona en el game plan (probado con UBA)
✓ La defensa, los armadores y los heatmaps leen bien los datos
