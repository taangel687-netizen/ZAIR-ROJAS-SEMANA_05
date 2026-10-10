import styles from './Topbar.module.css'

/**
 * Cabecera superior de la página.
 * @param {Object} props
 * @param {string} props.title - Título de la vista.
 * @param {string} [props.subtitle] - Contexto (tienda, ciudad, periodo).
 * @param {import('react').ReactNode} [props.children] - Acciones o indicadores a la derecha.
 */
export default function Topbar({ title, subtitle, children }) {
  return (
    <header className={styles.topbar}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {children && <div className={styles.actions}>{children}</div>}
    </header>
  )
}
