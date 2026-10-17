import { Order } from '../interfaces/orders.interface';

/**
 * Arreglo de órdenes de compra simuladas para pruebas unitarias y entornos de desarrollo.
 *
 * @remarks
 * Proporciona un conjunto de datos estáticos y predecibles que cumplen
 * con el contrato estricto de la interfaz `Order`.
 *
 * @example
 * ```ts
 * const testOrders: Order[] = ORDERS_MOCK;
 * ```
 *
 * @public
 */
export const ORDERS_MOCK: Order[] = [
  {
    id: 'ORD-001',
    orderNumber: 'ORD-2026-1001',
    customerName: 'Carlos Gómez',
    productName: 'Portátil ASUS ZenBook',
    quantity: 1,
    totalPrice: 1250.00,
    status: 'Entregado',
    createdAt: '2026-10-10T10:30:00.000Z',
  },
  {
    id: 'ORD-002',
    orderNumber: 'ORD-2026-1002',
    customerName: 'Laura Morales',
    productName: 'Monitor Samsung 27"',
    quantity: 2,
    totalPrice: 480.00,
    status: 'Pendiente',
    createdAt: '2026-10-12T15:45:00.000Z',
  },
  {
    id: 'ORD-003',
    orderNumber: 'ORD-2026-1003',
    customerName: 'Andrés Felipe Castro',
    productName: 'Teclado Mecánico RGB',
    quantity: 3,
    totalPrice: 150.00,
    status: 'En Proceso',
    createdAt: '2026-10-14T08:20:00.000Z',
  },
  {
    id: 'ORD-004',
    orderNumber: 'ORD-2026-1004',
    customerName: 'Mariana Duque',
    productName: 'Silla Ergonómica Pro',
    quantity: 1,
    totalPrice: 320.00,
    status: 'Cancelado',
    createdAt: '2026-10-15T09:10:00.000Z',
  },
];
