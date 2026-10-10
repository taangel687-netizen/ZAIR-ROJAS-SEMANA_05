/** Utilidades de formato (funciones puras, sin dependencias de React). */
export const formatMoney = (n) => `S/ ${n.toLocaleString('es-PE')}`
export const formatNumber = (n) => n.toLocaleString('es-PE')
export const formatPercent = (n, decimals = 1) => `${n.toFixed(decimals)}%`

/**
 * Devuelve el tono semántico de un avance (0-100).
 * @param {number} pct - Porcentaje de avance.
 * @param {boolean} [inverse=false] - true si un valor bajo es lo deseable.
 * @returns {'success'|'warning'|'danger'}
 */
export function toneFor(pct, inverse = false) {
  const score = inverse ? 100 - pct : pct
  if (score >= 75) return 'success'
  if (score >= 50) return 'warning'
  return 'danger'
}
