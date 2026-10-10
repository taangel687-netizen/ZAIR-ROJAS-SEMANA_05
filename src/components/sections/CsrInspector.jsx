import { useEffect, useState } from 'react'
import Panel from '@/components/ui/Panel'
import Badge from '@/components/ui/Badge'

/**
 * Inspector de Client-Side Rendering (paso 5). Es el único componente con estado:
 * necesita medir el navegador DESPUÉS de montar. Estilado con Tailwind.
 *  - Descarga el HTML inicial (el mismo de "Ver código fuente") y comprueba que #root está vacío.
 *  - Lee el DOM actual y las métricas de navegación/pintado del navegador.
 */
export default function CsrInspector() {
  const [rawHtml, setRawHtml] = useState('')
  const [dom, setDom] = useState(null)
  const [fcp, setFcp] = useState(null)

  useEffect(() => {
    const root = document.getElementById('root')
    const nav = performance.getEntriesByType('navigation')[0]
    setDom({
      rootChildren: root.childElementCount,
      nodes: document.getElementsByTagName('*').length,
      scripts: [...document.scripts].map((s) => s.getAttribute('src')).filter(Boolean),
      htmlReceived: nav ? Math.round(nav.responseEnd) : null,
      mountedAt: Math.round(performance.now()),
    })

    const controller = new AbortController()
    fetch('/', { cache: 'no-store', signal: controller.signal })
      .then((r) => r.text())
      .then(setRawHtml)
      .catch(() => {})

    let observer
    if ('PerformanceObserver' in window) {
      observer = new PerformanceObserver((list) => {
        const entry = list.getEntriesByName('first-contentful-paint')[0]
        if (entry) setFcp(Math.round(entry.startTime))
      })
      observer.observe({ type: 'paint', buffered: true })
    }
    return () => { controller.abort(); observer?.disconnect() }
  }, [])

  const initialRootEmpty = /<div id="root">\s*<\/div>/.test(rawHtml)
  const lines = rawHtml.split('\n').filter((l) => l.trim() !== '')

  return (
    <Panel
      id="csr"
      title="Inspector de Client-Side Rendering"
      subtitle="Compara el HTML que llega del servidor con el DOM que React construye en el navegador"
      actions={
        rawHtml
          ? <Badge tone={initialRootEmpty ? 'success' : 'danger'}>{initialRootEmpty ? 'CSR confirmado' : 'Root con contenido (¿SSR?)'}</Badge>
          : <Badge>Analizando…</Badge>
      }
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="min-w-0">
          <h3 className="mb-2 text-sm font-bold text-slate-700">1 · HTML inicial (equivale a Ctrl+U)</h3>
          <pre className="max-h-72 overflow-auto rounded-lg bg-slate-900 p-3 text-xs leading-relaxed text-slate-100">
            {lines.length === 0 && 'Descargando index.html…'}
            {lines.map((l, i) => (
              <code key={i} className={`block ${/id="root"/.test(l) ? 'rounded bg-yellow-400/25 font-bold text-yellow-200' : ''}`}>
                {l}
              </code>
            ))}
          </pre>
          <p className="mt-2 text-xs text-slate-500">
            El contenedor <code className="font-bold">#root</code> llega vacío: ningún texto de este panel existe aún en el HTML.
          </p>
        </div>

        <div className="min-w-0">
          <h3 className="mb-2 text-sm font-bold text-slate-700">2 · DOM actual (inyectado por JavaScript)</h3>
          {dom && (
            <dl className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border border-slate-200 p-3">
                <dt className="text-xs text-slate-500">Hijos directos de #root</dt>
                <dd className="text-2xl font-bold text-indigo-900">{dom.rootChildren}</dd>
              </div>
              <div className="rounded-lg border border-slate-200 p-3">
                <dt className="text-xs text-slate-500">Nodos en el DOM</dt>
                <dd className="text-2xl font-bold text-indigo-900">{dom.nodes}</dd>
              </div>
              <div className="rounded-lg border border-slate-200 p-3">
                <dt className="text-xs text-slate-500">HTML recibido a los</dt>
                <dd className="text-2xl font-bold text-slate-800">{dom.htmlReceived ?? '—'} ms</dd>
              </div>
              <div className="rounded-lg border border-slate-200 p-3">
                <dt className="text-xs text-slate-500">React montó a los</dt>
                <dd className="text-2xl font-bold text-slate-800">{dom.mountedAt} ms</dd>
              </div>
              <div className="col-span-2 rounded-lg border border-slate-200 p-3">
                <dt className="text-xs text-slate-500">Primer contenido pintado (FCP)</dt>
                <dd className="text-2xl font-bold text-slate-800">{fcp ?? '…'} {fcp !== null && 'ms'}</dd>
              </div>
            </dl>
          )}

          <h3 className="mb-1 mt-4 text-sm font-bold text-slate-700">3 · Scripts cargados</h3>
          <ul className="space-y-1 text-xs text-slate-600">
            {dom?.scripts.map((s) => (
              <li key={s} className="truncate rounded bg-slate-100 px-2 py-1 font-mono">{s}</li>
            ))}
          </ul>
        </div>
      </div>

      <ol className="mt-5 grid gap-2 text-sm text-slate-700 md:grid-cols-4">
        {['El servidor envía index.html casi vacío', 'El navegador descarga y ejecuta el bundle JS', 'createRoot().render() construye el DOM en #root', 'Aparece el primer contenido (FCP)'].map((t, i) => (
          <li key={t} className="flex gap-2 rounded-lg bg-slate-50 p-3">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-indigo-900 text-xs font-bold text-white">{i + 1}</span>
            <span>{t}</span>
          </li>
        ))}
      </ol>
    </Panel>
  )
}
