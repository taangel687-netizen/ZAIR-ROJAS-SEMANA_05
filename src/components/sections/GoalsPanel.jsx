import Panel from '@/components/ui/Panel'
import ProgressBar from '@/components/ui/ProgressBar'
import Badge from '@/components/ui/Badge'
import { formatMoney, formatPercent, toneFor } from '@/utils/format'

const fmt = { money: formatMoney, percent: (n) => formatPercent(n, 0) }

/**
 * Panel de metas. Compone Panel + ProgressBar (+ Badge en el slot `actions`).
 * @param {Object} props
 * @param {{id: string, label: string, current: number, target: number, format: 'money'|'percent', inverse?: boolean, caption: string}[]} props.goals
 */
export default function GoalsPanel({ goals }) {
  return (
    <Panel title="Metas del mes" subtitle="Avance frente al objetivo" actions={<Badge tone="info">Octubre</Badge>}>
      {goals.map((g) => {
        const pct = Math.round((g.current / g.target) * 100)
        return (
          <ProgressBar
            key={g.id}
            label={g.label}
            valueLabel={g.format === 'money' ? `${pct}%` : fmt.percent(g.current)}
            percent={pct}
            tone={toneFor(pct, g.inverse)}
          >
            {g.caption}
          </ProgressBar>
        )
      })}
    </Panel>
  )
}
