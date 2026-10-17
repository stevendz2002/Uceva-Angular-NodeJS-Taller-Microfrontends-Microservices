import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Ticket } from '../../interfaces/tickets.interface';

/**
 * Componente de tabla para la visualización de tickets de soporte técnico.
 *
 * Muestra el listado de tickets en una estructura tabular con indicadores visuales
 * (badges) para la prioridad y el estado de cada solicitud.
 *
 * @remarks
 * Este componente recibe los tickets mediante el `@Input() tickets` y se considera
 * un componente de presentación (organismo dentro del Atomic Design).
 *
 * @example
 * ```html
 * <app-tickets-table [tickets]="ticketsList"></app-tickets-table>
 * ```
 */
@Component({
  selector: 'app-tickets-table',
  templateUrl: './tickets-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class TicketsTableComponent {
  /**
   * Listado de tickets que se renderizan en la tabla.
   *
   * @type {Ticket[]}
   */
  @Input() tickets: Ticket[] = [];

  /**
   * Mapeo de niveles de prioridad a tipos de Badge del sistema de diseño.
   *
   * @type {Record<string, BadgeType>}
   * @remarks
   * - 'Baja' → 'info'
   * - 'Media' → 'primary'
   * - 'Alta' → 'warning'
   * - 'Crítica' → 'danger'
   */
  priorityMap: Record<string, BadgeType> = {
    Baja: 'info',
    Media: 'primary',
    Alta: 'warning',
    'Crítica': 'danger',
  };

  /**
   * Mapeo de estados del ticket a tipos de Badge del sistema de diseño.
   *
   * @type {Record<string, BadgeType>}
   * @remarks
   * - 'Abierto' → 'primary'
   * - 'En Proceso' → 'warning'
   * - 'Resuelto' → 'success'
   * - 'Cerrado' → 'secondary'
   */
  statusMap: Record<string, BadgeType> = {
    Abierto: 'primary',
    'En Proceso': 'warning',
    Resuelto: 'success',
    Cerrado: 'secondary',
  };

  /**
   * Retorna el tipo de badge correspondiente a la prioridad.
   *
   * @param priority Nivel de prioridad
   * @returns Tipo de badge válido para BadgeAtom
   */
  getPriorityBadge(priority: string): BadgeType {
    return this.priorityMap[priority] || 'primary';
  }

  /**
   * Retorna el tipo de badge correspondiente al estado.
   *
   * @param status Estado del ticket
   * @returns Tipo de badge válido para BadgeAtom
   */
  getStatusBadge(status: string): BadgeType {
    return this.statusMap[status] || 'secondary';
  }
}
