import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../../interfaces/tickets.interface';

/**
 * Servicio encargado de la gestión y consumo de tickets de soporte técnico.
 *
 * Proporciona métodos para obtener la información de tickets desde la API REST
 * del microservicio `Microservice-Tickets-NodeJS`.
 *
 * @example
 * ```ts
 * constructor(private ticketsService: TicketsService) {}
 *
 * this.ticketsService.getAllTickets().subscribe((tickets: Ticket[]) => {
 *   console.log(tickets);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class TicketsService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * URL base del endpoint del microservicio de tickets.
   */
  private readonly apiUrl = 'http://localhost:3005/api/tickets';

  /**
   * Obtiene la lista de tickets de soporte técnico desde el backend.
   *
   * @param countTickets Cantidad opcional de tickets a solicitar.
   * @returns Observable que emite un array de tickets tipados.
   *
   * @example
   * ```ts
   * this.ticketsService.getAllTickets().subscribe((tickets: Ticket[]) => {
   *   console.log(tickets);
   * });
   * ```
   */
  getAllTickets(countTickets?: number): Observable<Ticket[]> {
    const url = countTickets ? `${this.apiUrl}/${countTickets}` : this.apiUrl;
    return this.httpClient.get<Ticket[]>(url);
  }
}
