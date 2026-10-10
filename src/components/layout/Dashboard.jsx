import styles from './Dashboard.module.css'

/**
 * Shell de la aplicación. Combina "slots" con nombre (sidebar, topbar) y `children`.
 * @param {Object} props
 * @param {import('react').ReactNode} props.sidebar - Barra lateral.
 * @param {import('react').ReactNode} props.topbar - Cabecera superior.
 * @param {import('react').ReactNode} props.children - Contenido principal (secciones).
 */
export default function Dashboard({ sidebar, topbar, children }) {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>{sidebar}</aside>
      <div className={styles.content}>
        {topbar}
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}
