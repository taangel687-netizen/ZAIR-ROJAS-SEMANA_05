const colors = { success: '#15803d', warning: '#b45309', danger: '#b91c1c' }

/**
 * Barra de progreso. Usa estilos INLINE porque el ancho y el color dependen de
 * valores calculados en tiempo de ejecución.
 * @param {Object} props
 * @param {string} props.label - Etiqueta.
 * @param {string} props.valueLabel - Texto del valor (ej. "78%").
 * @param {number} props.percent - Avance de 0 a 100.
 * @param {'success'|'warning'|'danger'} [props.tone='success']
 * @param {import('react').ReactNode} [props.children] - Texto de apoyo.
 */
export default function ProgressBar({ label, valueLabel, percent, tone = 'success', children }) {
  const safe = Math.min(100, Math.max(0, percent))
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 600, marginBottom: 6 }}>
        <span>{label}</span>
        <span style={{ color: colors[tone] }}>{valueLabel}</span>
      </div>
      <div
        role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={safe}
        style={{ height: 10, background: '#e2e8f0', borderRadius: 999, overflow: 'hidden' }}
      >
        <div style={{ width: `${safe}%`, height: '100%', background: colors[tone], borderRadius: 999 }} />
      </div>
      {children && <p style={{ margin: '6px 0 0', fontSize: '0.78rem', color: '#64748b' }}>{children}</p>}
    </div>
  )
}
