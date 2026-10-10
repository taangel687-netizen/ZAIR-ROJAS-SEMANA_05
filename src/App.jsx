import Dashboard from '@/components/layout/Dashboard'
import Sidebar from '@/components/layout/Sidebar'
import Topbar from '@/components/layout/Topbar'
import Grid from '@/components/layout/Grid'
import Panel from '@/components/ui/Panel'
import MetricCard from '@/components/ui/MetricCard'
import Badge from '@/components/ui/Badge'
import BarChart from '@/components/charts/BarChart'
import SalesTable from '@/components/sections/SalesTable'
import ActivityFeed from '@/components/sections/ActivityFeed'
import GoalsPanel from '@/components/sections/GoalsPanel'
import StyleLab from '@/components/sections/StyleLab'
import CsrInspector from '@/components/sections/CsrInspector'

import { metrics } from '@/data/metrics'
import { weeklySales } from '@/data/weeklySales'
import { orders } from '@/data/orders'
import { goals } from '@/data/goals'
import { activity } from '@/data/activity'
import { navItems } from '@/data/navigation'

/**
 * Orquestador: solo compone el árbol de componentes y reparte los datos por props.
 * No contiene lógica de negocio ni estado.
 */
export default function App() {
  return (
    <Dashboard
      sidebar={
        <Sidebar brand="TecnoAndes" tagline="Panel de ventas" items={navItems}>
          Práctica Semana 05<br />IS093A · Desarrollo de Aplicaciones Web<br />UNCP · Ingeniería de Sistemas
        </Sidebar>
      }
      topbar={
        <Topbar title="Panel de Ventas" subtitle="TecnoAndes · Huancayo · octubre 2026">
          <Badge tone="success">Tienda en línea</Badge>
        </Topbar>
      }
    >
      <Grid id="resumen">
        {metrics.map((m) => (
          <MetricCard key={m.id} title={m.title} value={m.value} format={m.format}
            trend={m.trend} inverse={m.inverse} variant={m.variant}>
            {m.note}
          </MetricCard>
        ))}
      </Grid>

      <Grid id="ventas" template="2fr 1fr" collapse>
        <Panel title="Ventas semanales" subtitle="Últimas 6 semanas (S/)" actions={<Badge tone="info">+16 % última semana</Badge>}>
          <BarChart data={weeklySales} highlight={weeklySales.length - 1} />
        </Panel>
        <GoalsPanel goals={goals} />
      </Grid>

      <Grid id="pedidos" template="2fr 1fr" collapse>
        <Panel title="Pedidos recientes" subtitle="Seis últimos movimientos">
          <SalesTable orders={orders} />
        </Panel>
        <Panel title="Actividad" subtitle="Eventos de la tienda">
          <ActivityFeed items={activity} />
        </Panel>
      </Grid>

      <StyleLab />
      <CsrInspector />
    </Dashboard>
  )
}
