# TecnoAndes · Panel de Ventas — Práctica Semana 05 (IS093A)

SPA con **React + Vite** que aplica, sobre un caso coherente (panel de ventas de una tienda de tecnología en Huancayo):

- Arquitectura de componentes con **JSX** (`layout`, `ui`, `charts`, `sections`)
- **Props**, **children** y *slots* con nombre (`sidebar`, `topbar`, `actions`), documentados con JSDoc
- Tres estrategias de estilado: **CSS Modules**, **Tailwind CSS v4** e **inline**
- **Laboratorio de estilos** (StyleLab): scope, colisiones y prioridad de la cascada
- **Inspector CSR** (CsrInspector): demuestra en vivo que el HTML inicial llega vacío y React inyecta el DOM

## Requisitos
Node.js LTS (≥ 20) y npm.

## Uso
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # genera dist/
npm run preview   # sirve dist/ en http://localhost:4173
```

## Estructura
```
src/
├── main.jsx                 punto de entrada (createRoot)
├── App.jsx                  orquestador (sin lógica ni estado)
├── styles/global.css        Tailwind + reset + variables
├── utils/format.js          funciones puras de formato
├── data/                    datos que se reparten por props
└── components/
    ├── layout/    Dashboard · Sidebar · Topbar · Grid
    ├── ui/        Panel · MetricCard · Badge · ProgressBar
    ├── charts/    BarChart
    └── sections/  SalesTable · ActivityFeed · GoalsPanel · StyleLab · CsrInspector
```

## Autor
Apellidos y Nombres — UNCP, Ingeniería de Sistemas
