import styles from './Sidebar.module.css'

/**
 * Barra lateral de navegación.
 * @param {Object} props
 * @param {string} props.brand - Nombre de la marca.
 * @param {string} [props.tagline] - Descripción corta bajo la marca.
 * @param {{href: string, label: string, current?: boolean}[]} props.items - Enlaces.
 * @param {import('react').ReactNode} [props.children] - Pie de la barra (contenido libre).
 */
export default function Sidebar({ brand, tagline, items, children }) {
  return (
    <nav className={styles.nav} aria-label="Navegación principal">
      <div className={styles.brand}>
        <span className={styles.logo} aria-hidden="true">T</span>
        <div>
          <p className={styles.brandName}>{brand}</p>
          {tagline && <p className={styles.tagline}>{tagline}</p>}
        </div>
      </div>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`${styles.link} ${item.current ? styles.current : ''}`}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      {children && <div className={styles.footer}>{children}</div>}
    </nav>
  )
}
