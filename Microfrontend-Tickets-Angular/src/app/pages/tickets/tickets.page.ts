import { Component, inject, OnInit } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { TicketsTableComponent } from '../../components/tickets-table/tickets-table.component';
import { State } from '../../interfaces/state.interface';
import { Ticket } from '../../interfaces/tickets.interface';
import { TicketsService } from '../../services/tickets/tickets.service';

/**
 * Componente de página principal para la gestión de tickets de soporte técnico.
 *
 * Se encarga de consumir el servicio `TicketsService`, gestionar los estados del flujo
 * asíncrono (carga, error y éxito) y coordinar el renderizado entre alertas informativas
 * y la tabla de tickets.
 *
 * @remarks
 * Este componente es expuesto remotamente vía Webpack Module Federation para ser
 * consumido por el contenedor principal `Client-Host-Angular`.
 *
 * @example
 * ```html
 * <app-tickets></app-tickets>
 * ```
 */
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  imports: [TicketsTableComponent, AlertComponent],
})
export class TicketsPage implements OnInit {
  /**
   * Listado de tickets obtenidos desde el microservicio backend.
   *
   * @type {Ticket[]}
   */
  tickets: Ticket[] = [];

  /**
   * Estado actual del componente dentro del ciclo de vida de la petición.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para la obtención de tickets desde la API REST.
   * Inyectado mediante la función `inject()`.
   */
  private ticketsService = inject(TicketsService);

  /**
   * Ciclo de vida inicial del componente.
   *
   * @remarks
   * Inicia el estado en `'loading'` y dispara la petición asíncrona hacia el servicio.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.ticketsService.getAllTickets().subscribe({
      next: (tickets: Ticket[]) => {
        this.tickets = tickets;
        this.state = 'success';
      },
      error: (error: unknown) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
