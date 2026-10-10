import styles from './StyleLab.module.css'
import Panel from '@/components/ui/Panel'
import Badge from '@/components/ui/Badge'

// 1) Tailwind: clases utilitarias completas (detectables por el compilador).
const twButton = 'rounded-lg bg-indigo-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-800'
// 2) Inline: objeto de estilos en camelCase. No admite :hover ni media queries.
const inlineButton = {
  background: '#0f766e', color: '#fff', border: 0, borderRadius: 8,
  padding: '8px 16px', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer',
}

/**
 * Laboratorio que contrasta las tres estrategias de estilado y sus problemas
 * típicos (colisiones y prioridad de la cascada).
 */
export default function StyleLab() {
  return (
    <Panel
      id="estilos"
      title="Laboratorio de estilos"
      subtitle="Mismo botón, tres estrategias · scope, colisiones y cascada"
    >
      <div className={styles.cols}>
        <article className={styles.demo}>
          <Badge tone="info">CSS Modules</Badge>
          <button type="button" className={styles.moduleButton}>Guardar cambios</button>
          <p className={styles.caption}>Clase generada:</p>
          <code className={styles.code}>{styles.moduleButton}</code>
          <p className={styles.caption}>Scope local por archivo; admite :hover y media queries.</p>
        </article>

        <article className={styles.demo}>
          <Badge tone="success">Tailwind</Badge>
          <button type="button" className={twButton}>Guardar cambios</button>
          <p className={styles.caption}>className con utilidades:</p>
          <code className={styles.code}>{twButton}</code>
          <p className={styles.caption}>Sin archivo CSS propio; las variantes (hover:) van en la clase.</p>
        </article>

        <article className={styles.demo}>
          <Badge tone="warning">Inline</Badge>
          <button type="button" style={inlineButton}>Guardar cambios</button>
          <p className={styles.caption}>Objeto style:</p>
          <code className={styles.code}>{JSON.stringify(inlineButton)}</code>
          <p className={styles.caption}>Útil para valores dinámicos; no soporta :hover ni @media.</p>
        </article>
      </div>

      <div className={styles.cols}>
        <article className={styles.demo}>
          <Badge tone="danger">Colisión global</Badge>
          {/* .demo-global-title está definido en global.css: cualquier componente que use el mismo nombre lo hereda */}
          <h3 className="demo-global-title">Título con clase global</h3>
          <p className={styles.caption}>
            Definido en global.css. Si otro componente usa <code>.demo-global-title</code> recibirá el mismo
            estilo (colisión).
          </p>
        </article>

        <article className={styles.demo}>
          <Badge tone="info">Sin colisión</Badge>
          <h3 className={styles.moduleTitle}>Título con CSS Module</h3>
          <p className={styles.caption}>
            Misma idea, pero el nombre se hashea: <code>{styles.moduleTitle}</code>. Otro .moduleTitle no interfiere.
          </p>
        </article>

        <article className={styles.demo}>
          <Badge tone="neutral">Cascada</Badge>
          <h3 className={styles.cascade} style={{ color: '#ea580c' }}>¿Azul o naranja?</h3>
          <p className={styles.caption}>
            La clase del módulo define color azul; el estilo inline define naranja y gana por especificidad.
          </p>
        </article>
      </div>
    </Panel>
  )
}
