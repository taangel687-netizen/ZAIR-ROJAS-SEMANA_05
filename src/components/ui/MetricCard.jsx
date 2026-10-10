import styles from './MetricCard.module.css'
import { formatMoney, formatNumber, formatPercent } from '@/utils/format'

const formatters = { money: formatMoney, number: formatNumber, percent: formatPercent }

/**
 * Tarjeta de métrica. Componente presentacional: todo llega por props (inmutables).
 * @param {Object} props
 * @param {string} props.title - Nombre del indicador.
 * @param {number} props.value - Valor numérico.
 * @param {'money'|'number'|'percent'} [props.format='number'] - Formato de visualización.
 * @param {number} [props.trend] - Variación porcentual (+/-).
 * @param {boolean} [props.inverse=false] - Si es true, una baja es favorable.
 * @param {'primary'|'success'|'info'|'warning'|'danger'} [props.variant='primary'] - Color de acento.
 * @param {import('react').ReactNode} [props.children] - Nota anidada.
 */
export default function MetricCard({ title, value, format = 'number', trend, inverse = false, variant = 'primary', children }) {
  const display = formatters[format](value)
  const hasTrend = typeof trend === 'number'
  const isGood = inverse ? trend < 0 : trend >= 0
  const trendClass = isGood ? styles.up : styles.down

  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.value}>{display}</p>
      {hasTrend && (
        <span className={`${styles.trend} ${trendClass}`}>
          {trend >= 0 ? '▲' : '▼'} {Math.abs(trend).toFixed(1)}% vs. mes anterior
        </span>
      )}
      {children && <div className={styles.note}>{children}</div>}
    </article>
  )
}
