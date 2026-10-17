import { Component, inject, OnInit } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { Order } from '../../interfaces/orders.interface';
import { State } from '../../interfaces/state.interface';
import { OrdersService } from '../../services/orders/orders.service';

/**
 * Componente de página principal para la gestión y visualización de órdenes.
 *
 * @description
 * Consume el servicio reactivo `OrdersService` para obtener la lista de órdenes
 * desde el backend en el puerto 3004 y coordina los estados de carga, error y éxito,
 * delegando la renderización de la tabla al componente `OrdersTableComponent`.
 *
 * @remarks
 * Esta página es expuesta como módulo federado remoto (`OrdersPage`) a través
 * de Webpack Module Federation para su consumo en el contenedor host.
 *
 * @example
 * ```html
 * <app-orders></app-orders>
 * ```
 *
 * @public
 */
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  imports: [OrdersTableComponent, AlertComponent],
})
export class OrdersPage implements OnInit {

  /**
   * Colección de órdenes recuperadas desde el microservicio backend.
   *
   * @type {Order[]}
   * @default []
   */
  orders: Order[] = [];

  /**
   * Estado actual del ciclo de vida y petición asíncrona del componente.
   *
   * @type {State}
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio inyectado para la consulta de órdenes mediante HTTP.
   */
  private readonly ordersService: OrdersService = inject(OrdersService);

  /**
   * Hook de inicialización del componente en el que se ejecuta la carga de datos.
   *
   * @remarks
   * Cambia el estado a `loading`, solicita las órdenes y gestiona la respuesta
   * asignando los datos y transicionando a `success` o `error`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.ordersService.getAllOrders(10).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
