import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../interfaces/orders.interface';

/**
 * Servicio encargado de la gestión y consumo de órdenes de compra.
 *
 * @description
 * Proporciona métodos para consultar la información de pedidos
 * desde el backend `Microservice-Orders-NodeJS` a través de peticiones HTTP.
 *
 * @remarks
 * Se conecta al endpoint oficial en el puerto 3004: `http://localhost:3004/api/orders`.
 *
 * @example
 * ```ts
 * const ordersService = inject(OrdersService);
 * ordersService.getAllOrders().subscribe(data => console.log(data));
 * ```
 *
 * @public
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  /**
   * URL base de la API de órdenes expuesta por el microservicio Node.js.
   */
  private readonly apiUrl: string = 'http://localhost:3004/api/orders';

  /**
   * Cliente HTTP de Angular para la ejecución de peticiones REST.
   */
  private readonly httpClient: HttpClient = inject(HttpClient);

  /**
   * Obtiene la lista de órdenes desde el microservicio.
   *
   * @param count Cantidad opcional de registros a solicitar. Si no se suministra, consulta la raíz `/api/orders`.
   * @returns `Observable<Order[]>` con el arreglo de órdenes tipado.
   *
   * @example
   * ```ts
   * this.ordersService.getAllOrders().subscribe((orders: Order[]) => {
   *   this.orders = orders;
   * });
   * ```
   */
  getAllOrders(count?: number): Observable<Order[]> {
    const targetUrl = count !== undefined ? `${this.apiUrl}/${count}` : this.apiUrl;
    return this.httpClient.get<Order[]>(targetUrl);
  }
}
