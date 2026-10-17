/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa una orden o pedido de compra en el sistema
 *       required:
 *         - id
 *         - orderNumber
 *         - customerName
 *         - productName
 *         - quantity
 *         - totalPrice
 *         - status
 *         - createdAt
 *       properties:
 *         id:
 *           type: string
 *           description: Identificador alfanumérico único de la orden
 *           example: ORD-001
 *         orderNumber:
 *           type: string
 *           description: Código o número consecutivo de la orden
 *           example: ORD-2026-1001
 *         customerName:
 *           type: string
 *           description: Nombre completo del cliente que registró la compra
 *           example: Carlos Alberto Gómez
 *         productName:
 *           type: string
 *           description: Nombre del producto adquirido
 *           example: Portátil ASUS ZenBook Pro
 *         quantity:
 *           type: integer
 *           minimum: 1
 *           description: Cantidad de unidades solicitadas
 *           example: 2
 *         totalPrice:
 *           type: number
 *           format: float
 *           description: Valor total de la orden facturado
 *           example: 1850.50
 *         status:
 *           type: string
 *           description: Estado de gestión o despacho de la orden
 *           enum:
 *             - Pendiente
 *             - En Proceso
 *             - Entregado
 *             - Cancelado
 *           example: Entregado
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de creación de la orden en formato ISO 8601
 *           example: "2026-10-15T14:32:00.000Z"
 */
export {};