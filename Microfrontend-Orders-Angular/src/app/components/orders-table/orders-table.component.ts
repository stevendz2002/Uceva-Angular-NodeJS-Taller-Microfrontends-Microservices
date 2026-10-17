import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Order, OrderStatus } from '../../interfaces/orders.interface';

/**
 * Componente de tabla para la visualización de órdenes de compra.
 *
 * @description
 * Renderiza el listado de pedidos en una tabla estructurada y accesible,
 * presentando atributos como ID, número de orden, cliente, producto,
 * cantidad, precio total con formato de moneda y badge de estado.
 *
 * @remarks
 * Cumple con los lineamientos del Atomic Design (organismo) y consume el componente
 * `BadgeAtom` del sistema de diseño oficial de la asignatura.
 *
 * @example
 * ```html
 * <app-orders-table [orders]="ordersList"></app-orders-table>
 * ```
 *
 * @public
 */
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class OrdersTableComponent {

  /**
   * Colección de órdenes que se renderizan en el cuerpo de la tabla.
   *
   * @type {Order[]}
   * @default []
   */
  @Input() orders: Order[] = [];

  /**
   * Mapeo de estados del ciclo de vida de la orden a variantes de color de BadgeType.
   *
   * @remarks
   * Asignación visual por estado:
   * - 'Pendiente' → 'warning' (Amarillo)
   * - 'En Proceso' → 'primary' (Azul)
   * - 'Entregado' → 'success' (Verde)
   * - 'Cancelado' → 'danger' (Rojo)
   */
  readonly statusBadgeMap: Record<OrderStatus, BadgeType> = {
    'Pendiente': 'warning',
    'En Proceso': 'primary',
    'Entregado': 'success',
    'Cancelado': 'danger',
  };

  /**
   * Determina la variante visual del badge a partir de la cadena del estado.
   *
   * @param status Nombre o cadena representativa del estado de la orden.
   * @returns Variante de color `BadgeType` admitida por el componente `BadgeAtom`.
   *
   * @example
   * ```ts
   * const badgeColor = this.getBadgeType('Entregado'); // Retorna 'success'
   * ```
   */
  getBadgeType(status: string): BadgeType {
    const key = status as OrderStatus;
    return this.statusBadgeMap[key] || 'secondary';
  }
}
