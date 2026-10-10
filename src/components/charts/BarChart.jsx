import styles from './BarChart.module.css'
import { formatMoney } from '@/utils/format'

/**
 * Gráfico de barras sin librerías. Layout en CSS Module; la altura de cada barra
 * (valor dinámico) va en estilo inline.
 * @param {Object} props
 * @param {{label: string, value: number}[]} props.data
 * @param {number} [props.highlight] - Índice de la barra resaltada.
 * @param {number} [props.height=200] - Alto del área del gráfico (px).
 * @param {(n: number) => string} [props.formatValue]
 */
export default function BarChart({ data, highlight, height = 200, formatValue = formatMoney }) {
  const max = Math.max(...data.map((d) => d.value))
  return (
    <div className={styles.chart} style={{ height }} role="img" aria-label="Gráfico de barras de ventas semanales">
      {data.map((d, i) => (
        <div key={d.label} className={styles.col}>
          <div className={styles.barArea}>
            <div
              className={`${styles.bar} ${i === highlight ? styles.active : ''}`}
              style={{ height: `${(d.value / max) * 100}%` }}
              title={`${d.label}: ${formatValue(d.value)}`}
            />
          </div>
          <span className={styles.label}>{d.label}</span>
          <span className={styles.value}>{formatValue(d.value)}</span>
        </div>
      ))}
    </div>
  )
}
