/**
 * Interfaz que representa una orden de compra en el microfrontend de órdenes.
 *
 * @description
 * Modela los datos de un pedido registrado en el sistema, permitiendo su visualización
 * en tablas y componentes visuales dentro de la arquitectura de microfrontends.
 *
 * @remarks
 * Cumple estrictamente con el contrato de datos del microservicio Node.js:
 * - `id`: Identificador alfanumérico único (ej: "ORD-001")
 * - `orderNumber`: Número consecutivo de orden (ej: "ORD-2026-1001")
 * - `customerName`: Nombre completo del cliente
 * - `productName`: Nombre del producto solicitado
 * - `quantity`: Cantidad solicitada
 * - `totalPrice`: Precio total facturado
 * - `status`: Estado actual del pedido
 * - `createdAt`: Fecha de creación en formato ISO 8601
 *
 * @example
 * ```ts
 * const order: Order = {
 *   id: 'ORD-001',
 *   orderNumber: 'ORD-2026-1001',
 *   customerName: 'Carlos Alberto Gómez',
 *   productName: 'Portátil ASUS ZenBook',
 *   quantity: 1,
 *   totalPrice: 1250.00,
 *   status: 'Entregado',
 *   createdAt: '2026-10-15T14:32:00.000Z'
 * };
 * ```
 *
 * @public
 */
export interface Order {
  /**
   * Identificador único alfanumérico de la orden.
   */
  id: string;

  /**
   * Código o número consecutivo oficial de la orden.
   */
  orderNumber: string;

  /**
   * Nombre completo del cliente que realizó la compra.
   */
  customerName: string;

  /**
   * Denominación o nombre comercial del producto adquirido.
   */
  productName: string;

  /**
   * Cantidad de unidades solicitadas en la orden.
   */
  quantity: number;

  /**
   * Monto total monetario facturado para la orden.
   */
  totalPrice: number;

  /**
   * Estado del ciclo de vida de la orden (ej: Pendiente, En Proceso, Entregado, Cancelado).
   */
  status: string;

  /**
   * Marca de tiempo de registro de la orden en formato ISO 8601.
   */
  createdAt: string;
}

/**
 * Tipos de estados permitidos para clasificar visualmente una orden.
 *
 * @remarks
 * Permite mapear los estados de las órdenes a variantes de color en componentes visuales:
 * - 'Pendiente'
 * - 'En Proceso'
 * - 'Entregado'
 * - 'Cancelado'
 *
 * @public
 */
export type OrderStatus = 'Pendiente' | 'En Proceso' | 'Entregado' | 'Cancelado';
