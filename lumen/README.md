# Lumen — sistema de diseño SaaS estilo Apple

Especificación completa del sistema de diseño Lumen. Es la fuente de verdad: usa solo estos tokens (colores, tipografía, espaciado, radios, sombras) y estos componentes.

| Archivo | Contenido |
| --- | --- |
| `tokens.json` | Todos los tokens con su uso. |
| `tokens.css` | Los tokens como variables CSS. **Generado**: `node lumen/scripts/build-tokens.js`. |
| `components/bundle.css` | Estilos de los componentes. Solo lee `var(--…)`. |
| `components/bundle.js` | Componentes React 18 expuestos como `window.Lumen`. |
| `components/index.d.ts` | API de los componentes (TypeScript). |

Los tokens se exponen como `var(--nombre)` (`var(--accent)`, `var(--space-6)`, `var(--radius-lg)`); las familias como `var(--font-display)`, `var(--font-sans)` y `var(--font-mono)`; los estilos tipográficos como clases `.lm-text-<estilo>` (`.lm-text-title-1`, `.lm-text-callout`…). El tema se cambia con `data-theme="light"` o `data-theme="dark"` en `<html>`; sin atributo, sigue la preferencia del sistema.

```html
<link rel="stylesheet" href="/lumen/tokens.css">
<link rel="stylesheet" href="/lumen/components/bundle.css">
```

## 1. Guía de marca

Lumen es el sistema de diseño de un producto SaaS moderno con la sensibilidad de las interfaces de Apple: mucho aire, tipografía de sistema muy cuidada, un único color de acento, superficies que se separan por luz y no por líneas, y movimiento discreto. El objetivo es que un panel denso de datos se lea con calma.

### Principios

- **Claridad antes que decoración.** Cada pantalla tiene una tarea principal y una sola acción `primary`. Todo lo demás es `secondary` o `plain`.
- **Deferencia al contenido.** La interfaz se retira: fondos neutros (`surface`, `surface-raised`), sin bordes decorativos, sin degradados. El color lo ponen los datos y la acción principal.
- **Profundidad con luz.** Las capas se distinguen por `shadow-card` y por materiales translúcidos (`glass` + `blur-glass`), no por marcos.
- **Precisión.** Todo espacio es un paso de la escala (`space-*`), todo radio un `radius-*`, toda cifra en columna usa `font-variant-numeric: tabular-nums`.

### Voz y contenido

- Tutea al usuario y habla en presente: "Invita a tu equipo", "Tus datos se actualizan cada hora".
- Frases cortas, sin exclamaciones ni emoji. Nada de "¡Genial!" ni "Ups".
- Mayúscula solo al inicio de frase, también en botones y títulos: "Guardar cambios", "Miembros del equipo".
- Los botones empiezan por verbo y dicen exactamente qué pasa: "Eliminar proyecto", no "Aceptar".
- Los errores dicen qué ha pasado y cómo arreglarlo: "Solo letras minúsculas, números y guiones."
- Cifras en el formato regional del usuario: "48.920 €", "2,1 %", "24 sept. 2026".

### Color

- Fondo de la app: `surface`. Tarjetas, campos y paneles: `surface-raised`. Controles secundarios: `fill`.
- Texto principal en `ink`; texto secundario en `ink-muted`, solo sobre `surface` o `surface-raised`.
- `accent` es el único color de marca: botón `primary`, Switch activo, sparklines. Texto sobre él siempre `on-accent`. Para enlaces y texto azul usa `accent-text`, nunca `accent`.
- Estados: `success`, `warning`, `danger`, cada uno con su fondo `*-soft`. Siempre acompañados de una palabra o flecha, nunca solo color.
- Separadores con `line`; bordes que delimitan controles con `line-strong`.
- Dos temas, Claro y Oscuro. El oscuro usa negro puro en `surface` y grises cálidos elevados (`surface-raised` #1c1c1e); la sombra de las tarjetas pasa a ser un filo de luz.
- Foco de teclado: `focus-ring` de 2px sólidos con 2px de separación (en campos, anillo más halo `focus-glow`). Nunca elimines el foco.

### Tipografía

- Familias de sistema: `display` (SF Pro Display en dispositivos Apple) para títulos y cifras grandes, `sans` (SF Pro Text) para todo lo demás y `mono` (SF Mono) para claves e IDs. Fuera de Apple se usa Geist y Geist Mono (Google Fonts, cargadas desde `bundle.css`).
- Escala: `display` 56/60 · `title-1` 34/40 · `title-2` 24/30 · `title-3` 19/24 · `headline` 17/22 · `body` 15/22 · `callout` 13/18 · `caption` 12/16 · `mono` 13/18.
- Los tamaños grandes se aprietan (`letter-spacing` negativo, ya incluido en cada estilo). No apliques espaciado positivo salvo en `caption`.
- Pesos: 400 para lectura, 500 para etiquetas y controles, 600 para títulos. 700 solo en `display`.
- Un solo `display` por pantalla y solo en bienvenidas o estados vacíos; dentro de la app el título de página es `title-1`.

### Espaciado y maquetación

- Escala de 4px: `space-1` 4 · `space-2` 8 · `space-3` 12 · `space-4` 16 · `space-5` 20 · `space-6` 24 · `space-8` 32 · `space-12` 48 · `space-16` 64.
- Estructura de la app: NavBar de 52px arriba, barra lateral de 240px, contenido con ancho máximo de 1200px y márgenes de `space-8` (`space-4` en móvil).
- Rejillas de tarjetas con `gap: var(--space-6)`; secciones separadas por `space-12`.
- En móvil (<640px) todo pasa a una columna y la barra lateral se convierte en una hoja.

### Radios y elevación

- `radius-pill` en botones, badges y Switch; `radius-md` (10px) en campos y SegmentedControl; `radius-lg` (18px) en tarjetas; `radius-xl` (28px) en modales.
- Tres niveles de sombra: `shadow-control` (elementos seleccionados dentro de un control), `shadow-card` (tarjetas) y `shadow-overlay` (menús, popovers, modales). No inventes sombras intermedias.

### Materiales

- `glass` con `backdrop-filter: var(--blur-glass)` solo en la NavBar y en barras flotantes (barra de acciones de una selección múltiple). El contenido debe verse pasar por debajo.
- Nunca pongas `glass` sobre `glass` ni lo uses en tarjetas.

### Movimiento

- Transiciones de 200–280 ms con `ease` o `cubic-bezier(.3, .7, .4, 1)` (el deslizamiento del Switch). Los botones se hunden a `scale(.97)` al pulsar.
- Nada rebota ni gira. Los paneles aparecen con fundido y 8px de desplazamiento.
- Con `prefers-reduced-motion: reduce` se eliminan transiciones y escalados (ya resuelto en `bundle.css`).

### Iconografía

- Iconos lineales de trazo 1.5px, 20px en la interfaz y 16px dentro de botones `sm`, en `currentColor`.
- No hay set de iconos propio todavía. SF Symbols no puede usarse en web por su licencia; como sustituto se recomienda Lucide, que tiene un trazo y unas proporciones parecidas. Pendiente: elegir y añadir el set definitivo.
- Sin emoji en la interfaz.
- Pendiente: aún no hay logotipo; el nombre se compone en tipografía `display` a peso 600.

### Uso de los componentes

Los componentes están en `components/bundle.js` como `window.Lumen` (`Button`, `TextField`, `Switch`, `SegmentedControl`, `Badge`, `Card`, `Metric`, `NavBar`) y necesitan React 18 en la página. Carga primero `tokens.css` y después `components/bundle.css`; todos los estilos leen los tokens como `var(--nombre)`, así que el tema se cambia con `data-theme="light"` o `data-theme="dark"` en `<html>`.

```jsx
const { Card, Metric, SegmentedControl } = window.Lumen;

<Card title="Ingresos" action={<SegmentedControl aria-label="Periodo" options={['7 días', '30 días', '12 meses']} />}>
  <Metric label="Ingresos recurrentes (MRR)" value="48.920 €" delta="12,4 %" trend="up" caption="frente a agosto" data={[31, 33, 36, 38, 41, 44, 49]} />
</Card>
```

Para la maquetación propia (rejillas, filas de tabla), usa los mismos tokens: `gap: var(--space-6)`, `border-top: 1px solid var(--line)`, `color: var(--ink-muted)`.

En páginas estáticas sin React (como la landing), se puede escribir directamente el mismo marcado que generan los componentes (`lm-btn lm-btn--primary lm-btn--md`, `lm-card`, `lm-seg`…): los estilos son los mismos.

## 2. Componentes

### Button

Botón en forma de cápsula para acciones; `secondary` es el valor por defecto y `primary` aparece como máximo una vez por vista.

- `children`: la etiqueta, verbo primero y en minúscula de frase ("Guardar cambios", no "GUARDAR" ni "Cambios guardados").
- `variant`: `primary` (la acción para la que existe la pantalla), `secondary` (por defecto; alternativas y cancelar), `plain` (acciones terciarias con aspecto de enlace), `destructive` (borrar, revocar, cancelar suscripción).
- `size`: `sm` 28px en tablas y barras; `md` 36px por defecto; `lg` 48px solo en estados vacíos y pantallas de bienvenida.
- Cualquier atributo nativo de `<button>` (`onClick`, `disabled`, `type="submit"`…).

Reglas: una sola `primary` por vista; en un diálogo va a la derecha, con `secondary` "Cancelar" a su izquierda. `destructive` nunca es la acción por defecto de un diálogo; pide confirmación con el nombre de lo que se borra. Mientras la acción está en curso, deshabilita el botón y cambia la etiqueta a gerundio ("Publicando…"). No uses iconos solos sin `aria-label`.

### TextField

Campo de texto de una línea con etiqueta visible, ayuda opcional y estado de error.

- `label`: siempre; nunca uses el placeholder como etiqueta.
- `hint`: una frase que explica el formato o para qué se usa el dato.
- `error`: sustituye a `hint`, pinta el borde en `danger` y dice cómo corregirlo, no solo que está mal.
- Cualquier atributo de `<input>`.

Reglas: ancho según el dato esperado, no el 100 % por costumbre. Valida al salir del campo o al enviar, no mientras se escribe. El foco lleva anillo `focus-ring` de 2px más el halo `focus-glow`. En formularios, apila los campos con `space-6` entre ellos.

### Switch

Interruptor de encendido/apagado para ajustes que se aplican al instante, sin botón de guardar.

- `label`: describe lo que se activa, en positivo ("Resumen semanal por correo").
- `checked` + `onChange(next)` para controlarlo, o `defaultChecked`.
- `disabled` cuando el plan o los permisos no lo permiten; explica el motivo.

Reglas: si el cambio necesita confirmación o un botón "Guardar", usa una casilla. En listas de ajustes, etiqueta a la izquierda y Switch a la derecha. Pista activa en `accent`, apagada en `line-strong`; el pomo siempre `knob` con `shadow-control`.

### SegmentedControl

Selector de 2 a 5 opciones mutuamente excluyentes que cambian la vista actual.

- `options`: textos simples u objetos `{ value, label }`.
- `value` + `onChange(value)`, o `defaultValue` (por defecto, la primera opción).
- `aria-label`: nombre del grupo, porque no lleva etiqueta visible.

Reglas: etiquetas cortas y de longitud parecida. Cambia la vista en el acto; si navega, usa pestañas o la barra lateral. Más de 5 opciones: menú desplegable. Colócalo en la cabecera de la Card o de la página, a la derecha del título.

### Badge

Etiqueta corta en cápsula que indica el estado o la categoría de un elemento.

- `children`: una o dos palabras, con mayúscula inicial.
- `tone`: `neutral` (por defecto), `accent`, `success`, `warning`, `danger`.
- `dot`: punto del color del tono, para estados vivos.

Reglas: el color nunca va solo. Un badge por fila de tabla. No lo uses como botón ni como filtro.

### Card

Superficie elevada que agrupa contenido relacionado, con cabecera opcional de título, subtítulo y una acción.

- `title` (estilo `headline`) y `subtitle` (`ink-muted`).
- `action`: un único control a la derecha del título.
- `padding="none"`: para tablas y listas que llegan hasta el borde.

Reglas: se separa del fondo con `shadow-card`, sin borde. No anides tarjetas. Dentro, separa filas con líneas `line` de 1px. En rejillas, `space-6` entre tarjetas.

### Metric

Un indicador clave: etiqueta, cifra grande, variación y una sparkline opcional.

- `label`, `value` (ya formateado), `delta` + `trend`, `deltaTone`, `caption`, `data`.

Reglas: siempre dentro de una Card; de 2 a 4 por fila. La variación siempre lleva flecha y texto. La sparkline muestra tendencia, sin ejes.

### NavBar

Barra superior translúcida con marca y título a la izquierda y acciones globales a la derecha.

- `leading`, `title`, `children` (de 1 a 3 acciones; la `primary` va la última), `sticky`.

Reglas: es el único elemento con `glass` + `blur-glass`. Altura fija de 52px; sin buscadores anchos ni pestañas. Una sola NavBar por pantalla.
