/**
 * Insignia con estilado por utilidades Tailwind. Las clases se escriben completas
 * (no se concatenan) para que Tailwind pueda detectarlas al compilar.
 * @param {Object} props
 * @param {'success'|'info'|'warning'|'danger'|'neutral'} [props.tone='neutral']
 * @param {import('react').ReactNode} props.children
 */
const tones = {
  success: 'bg-emerald-100 text-emerald-800',
  info: 'bg-sky-100 text-sky-800',
  warning: 'bg-amber-100 text-amber-800',
  danger: 'bg-rose-100 text-rose-800',
  neutral: 'bg-slate-100 text-slate-700',
}

export default function Badge({ tone = 'neutral', children }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  )
}
