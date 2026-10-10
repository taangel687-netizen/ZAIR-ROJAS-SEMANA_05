/**
 * Indicadores principales de TecnoAndes (tienda de tecnología, Huancayo).
 * format: 'money' | 'number' | 'percent'
 * trend: variación % respecto al mes anterior.
 * inverse: true cuando una baja es favorable (ej. devoluciones).
 */
export const metrics = [
  { id: 'ventas', title: 'Ventas del mes', value: 48320, format: 'money', trend: 12.4, variant: 'primary', note: 'Pedidos pagados y enviados.' },
  { id: 'pedidos', title: 'Pedidos', value: 312, format: 'number', trend: 8.1, variant: 'success', note: '41 pendientes de despacho.' },
  { id: 'clientes', title: 'Clientes nuevos', value: 87, format: 'number', trend: 15.3, variant: 'info', note: 'Registrados desde la web.' },
  { id: 'devoluciones', title: 'Tasa de devolución', value: 2.1, format: 'percent', trend: -0.4, inverse: true, variant: 'warning', note: 'Una baja es positiva.' },
]
