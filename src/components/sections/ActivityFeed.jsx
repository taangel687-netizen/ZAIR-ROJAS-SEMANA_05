import styles from './ActivityFeed.module.css'

/**
 * Lista cronológica de eventos.
 * @param {Object} props
 * @param {{id: number, time: string, type: 'sale'|'alert'|'info', text: string}[]} props.items
 */
export default function ActivityFeed({ items }) {
  return (
    <ol className={styles.feed}>
      {items.map((it) => (
        <li key={it.id} className={styles.item}>
          <span className={`${styles.dot} ${styles[it.type]}`} aria-hidden="true" />
          <div>
            <p className={styles.text}>{it.text}</p>
            <time className={styles.time}>{it.time}</time>
          </div>
        </li>
      ))}
    </ol>
  )
}
