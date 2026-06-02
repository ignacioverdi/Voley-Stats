# ANÁLISIS COMPLETO DEL SISTEMA — CASLA VOLEY STATS
## Fecha: Junio 2026

---

## 🔴 FIXES APLICADOS ESTA NOCHE

### Bugs resueltos:
- `index.html` — PRÓXIMO badge ahora es 100% automático por fecha
- `index.html` — Resultados se leen de PARTIDOS_META automáticamente
- `ranking.html` — Botón ← Dashboard
- `ataque_jugador.html` — Botón ← Perfil con link dinámico
- `saque_jugador.html` — Botón ← Perfil con link dinámico
- `videos.html` — Botón ← Perfil
- `index.html` — datos_equipo.js legacy eliminado

---

## 🟡 AUTOMATIZACIÓN — PENDIENTES

### Alta prioridad:
1. **Fixture del index** — los partidos futuros (UBA, CCC, BOCA, RIVER) siguen hardcodeados en `FIXTURE_PROXIMOS`. Para automatizarlo: agregar columna `HORARIO` en el INDICE del Excel y leerla desde el script.

2. **game_plans.js** — manual al 100%. Para automatizar: agregar solapa `GAME_PLANS` en Excel con rival, fecha, horario, condición. El bat la genera.

3. **Cards del index** — el HTML de cada partido (22 MAY VELEZ, etc.) sigue siendo hardcoded. Para automatizar: reemplazar las cards estáticas por una generación dinámica desde PARTIDOS_META + FIXTURE_PROXIMOS.

### Media prioridad:
4. **datos_historial.js** — el bat ya detecta DVW automáticamente. Falta probar con un DVW real.

---

## 📱 EXPERIENCIA DEL JUGADOR — ANÁLISIS

### Lo que funciona bien:
✅ Perfil completo y navegación clara  
✅ Baterías con filtro P/E y subfiltros por partido  
✅ Evolución del rendimiento con barras proporcionales  
✅ Comparativa vs equipo y vs posición  
✅ Ranking con filtros y top 3  
✅ Videos por partido y tipo  
✅ Feedback del entrenador con categorías  
✅ Panel en vivo con detalle individual  

### Lo que falta (experiencia jugador):
✗ **Resumen del último partido** — el jugador no ve un resumen inmediato al entrar  
✗ **Notificación de nuevo feedback** — el entrenador carga feedback pero el jugador no sabe  
✗ **PIN de acceso por jugador** — cualquiera puede ver las stats de todos  
✗ **Sin modo oscuro/claro** — solo tema oscuro  

---

## 🏆 ANÁLISIS NIVEL ELITE — QUÉ AGREGARÍAMOS

### Nivel profesional mundial:
1. **Heatmaps de dirección de ataque** — sobre cancha real, mostrar zonas calientes de ataque/saque
2. **Tendencia de forma** — últimos 3 partidos vs primeros 3: ¿el equipo mejora o empeora?
3. **Índice de consistencia** — no solo el promedio sino la varianza partido a partido
4. **Game Plan adaptativo** — basado en los datos del rival, sugerir zonas de ataque
5. **Comparativa vs rival** — cuando se carga el próximo rival, mostrar sus tendencias conocidas
6. **Alertas automáticas** — "Nielson tiene 3 partidos seguidos por debajo del objetivo en saque"
7. **Fatiga acumulada** — preparación física + cantidad de acciones por partido
8. **Matriz de rotaciones** — qué rotaciones rinden mejor, cuáles peor
9. **Minutos de juego estimados** — basado en sets jugados por partido
10. **Export PDF** — el jugador puede descargarse su resumen de temporada

---

## 📋 LISTA DE ARCHIVOS A SUBIR A GITHUB

### Subir ahora (fixes de esta noche):
- `index.html` — PRÓXIMO automático, resultados desde PARTIDOS_META
- `ranking.html` — ← Dashboard
- `ataque_jugador.html` — ← Perfil dinámico
- `saque_jugador.html` — ← Perfil dinámico
- `videos.html` — ← Perfil

### Ya subidos antes de dormir:
- `jugador.html`, `dashboard.html`, `objetivos_config.js`, etc.

---

## 🔧 FLUJO IDEAL AUTOMATIZADO (meta)

```
1. Cargás datos en Excel (partido + resultado + feedback)
2. Corrés correr_todo.bat (30 segundos)
3. Subís 3-4 archivos .js a GitHub
4. TODO se actualiza: index, dashboard, jugador, ranking, baterías
```

**Lo que falta para llegar a ese flujo:**
- Fixture del index leyendo de PARTIDOS_META (90% hecho)
- Cards del index generadas dinámicamente (pendiente)
- game_plans.js generado por el bat (pendiente)
