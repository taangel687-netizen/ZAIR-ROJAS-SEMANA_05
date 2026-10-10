import styles from './Grid.module.css'

/**
 * Cuadrícula reutilizable. La plantilla de columnas se pasa por prop y se
 * entrega a CSS como variable (--template): así el CSS Module conserva el
 * control de los media queries.
 * @param {Object} props
 * @param {string} [props.id] - Ancla para la navegación.
 * @param {string} [props.template] - Valor de grid-template-columns.
 * @param {boolean} [props.collapse] - Si es true, pasa a 1 columna en pantallas pequeñas.
 * @param {import('react').ReactNode} props.children
 */
export default function Grid({ id, template = 'repeat(auto-fit, minmax(220px, 1fr))', collapse = false, children }) {
  return (
    <div id={id} className={`${styles.grid} ${collapse ? styles.collapse : ''}`} style={{ '--template': template }}>
      {children}
    </div>
  )
}
