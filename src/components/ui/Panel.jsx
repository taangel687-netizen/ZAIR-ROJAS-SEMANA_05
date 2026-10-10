import styles from './Panel.module.css'

/**
 * Contenedor genérico con título. Ejemplo de composición: `children` para el
 * cuerpo y `actions` como slot con nombre.
 * @param {Object} props
 * @param {string} [props.id] - Ancla de navegación.
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {import('react').ReactNode} [props.actions] - Elementos a la derecha del título.
 * @param {import('react').ReactNode} props.children
 */
export default function Panel({ id, title, subtitle, actions, children }) {
  const titleId = id ? `${id}-titulo` : undefined
  return (
    <section id={id} className={styles.panel} aria-labelledby={titleId}>
      <header className={styles.header}>
        <div>
          <h2 id={titleId} className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        {actions && <div className={styles.actions}>{actions}</div>}
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  )
}
