/**
 * Interfaz que define la estructura de una orden en el dominio del negocio.
 *
 * @remarks
 * Cumple con el contrato estricto de datos del taller de Microservicios:
 * - `id`: Identificador alfanumérico único (ej: "ORD-001")
 * - `orderNumber`: Número o código de orden (ej: "ORD-2026-1001")
 * - `customerName`: Nombre completo del cliente comprador
 * - `productName`: Nombre del producto solicitado
 * - `quantity`: Cantidad de unidades adquiridas
 * - `totalPrice`: Importe total monetario de la orden
 * - `status`: Estado actual del procesamiento de la orden
 * - `createdAt`: Marca de tiempo en formato ISO 8601
 *
 * @example
 * ```ts
 * const order: Order = {
 *   id: 'ORD-001',
 *   orderNumber: 'ORD-2026-1001',
 *   customerName: 'Carlos Gómez',
 *   productName: 'Portátil ASUS ZenBook',
 *   quantity: 1,
 *   totalPrice: 1250.00,
 *   status: 'Entregado',
 *   createdAt: '2026-10-10T10:30:00.000Z'
 * };
 * ```
 */
export interface Order {
  /** Identificador único alfanumérico de la orden */
  id: string;

  /** Código único o número consecutivo de la orden de compra */
  orderNumber: string;

  /** Nombre completo del cliente titular de la orden */
  customerName: string;

  /** Denominación del producto solicitado en la transacción */
  productName: string;

  /** Cantidad de unidades ordenadas */
  quantity: number;

  /** Monto total facturado para la orden */
  totalPrice: number;

  /** Estado actual de la orden (ej: Pendiente, En Proceso, Entregado, Cancelado) */
  status: string;

  /** Fecha y hora de creación de la orden en formato ISO 8601 */
  createdAt: string;
}

/**
 * Estados permitidos para el ciclo de vida de una orden.
 *
 * @remarks
 * Define las etapas de procesamiento que puede tener una orden en el sistema:
 * - `Pendiente`: Orden registrada a la espera de confirmación de pago o procesamiento.
 * - `En Proceso`: Orden en etapa de alistamiento y empaque.
 * - `Entregado`: Orden despachada y recibida satisfactoriamente por el cliente.
 * - `Cancelado`: Orden anulada por el cliente o por fallas en el procesamiento.
 */
export type OrderStatus = 'Pendiente' | 'En Proceso' | 'Entregado' | 'Cancelado';
