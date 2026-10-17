import { faker } from '@faker-js/faker';
import { Order, OrderStatus } from '../../../domain/interfaces/order.interface';

/**
 * Servicio encargado de la generación y gestión de órdenes de compra.
 *
 * @remarks
 * Este servicio implementa la generación de órdenes simuladas
 * utilizando la librería `@faker-js/faker`, proveyendo datos realistas
 * para pruebas y consumo en la arquitectura de microfrontends y microservicios.
 */
export class OrdersService {

  /**
   * Listado de estados posibles para las órdenes generadas.
   *
   * @remarks
   * Se emplean para asignar aleatoriamente el estado operativo
   * a cada orden ficticia generada.
   */
  private readonly statuses: OrderStatus[] = [
    'Pendiente',
    'En Proceso',
    'Entregado',
    'Cancelado',
  ];

  /**
   * Obtiene un listado de órdenes generadas dinámicamente.
   *
   * @param countOrders Cantidad de órdenes a generar (por defecto 10)
   * @returns Promesa que resuelve un arreglo de órdenes tipadas con la interfaz `Order`
   *
   * @example
   * ```ts
   * const orders = await ordersService.getAllOrders(10);
   * ```
   */
  public async getAllOrders(countOrders: number = 10): Promise<Order[]> {
    const orders: Promise<Order>[] = [];

    for (let i = 1; i <= countOrders; i++) {
      orders.push(this.generateOrder(i));
    }

    return Promise.all(orders);
  }

  /**
   * Genera un registro simulado de una orden de compra.
   *
   * @param index Consecutivo numérico utilizado para construir el identificador
   * @returns Promesa que resuelve una instancia tipada de `Order`
   */
  private generateOrder(index: number): Promise<Order> {
    const quantity = faker.number.int({ min: 1, max: 8 });
    const unitPrice = faker.number.float({ min: 25, max: 750, fractionDigits: 2 });
    const totalPrice = Number((quantity * unitPrice).toFixed(2));
    const randomYear = faker.helpers.arrayElement([2025, 2026]);
    const randomCode = faker.number.int({ min: 1000, max: 9999 });

    return Promise.resolve({
      id: `ORD-${String(index).padStart(3, '0')}`,
      orderNumber: `ORD-${randomYear}-${randomCode}`,
      customerName: faker.person.fullName(),
      productName: faker.commerce.productName(),
      quantity,
      totalPrice,
      status: faker.helpers.arrayElement(this.statuses),
      createdAt: faker.date.recent({ days: 30 }).toISOString(),
    });
  }
}
