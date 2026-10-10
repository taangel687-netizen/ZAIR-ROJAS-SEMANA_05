import styles from './SalesTable.module.css'
import Badge from '@/components/ui/Badge'
import { formatMoney } from '@/utils/format'

const statusTone = { pagado: 'success', enviado: 'info', pendiente: 'warning', anulado: 'danger' }

/**
 * Tabla de pedidos recientes.
 * @param {Object} props
 * @param {{id: string, customer: string, product: string, amount: number, status: string}[]} props.orders
 */
export default function SalesTable({ orders }) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Pedido</th>
            <th scope="col">Cliente</th>
            <th scope="col">Producto</th>
            <th scope="col" className={styles.right}>Monto</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td className={styles.id}>{o.id}</td>
              <td>{o.customer}</td>
              <td>{o.product}</td>
              <td className={styles.right}>{formatMoney(o.amount)}</td>
              <td><Badge tone={statusTone[o.status]}>{o.status}</Badge></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
