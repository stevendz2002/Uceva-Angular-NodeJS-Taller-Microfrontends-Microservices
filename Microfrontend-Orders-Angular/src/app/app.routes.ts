import { Routes } from '@angular/router';

/**
 * Definición de las rutas principales del microfrontend de órdenes.
 *
 * @remarks
 * Mapea las URLs internas a los componentes correspondientes.
 * Expone la ruta raíz que carga diferidamente el componente `OrdersPage`.
 *
 * @public
 */
export const routes: Routes = [
  /**
   * Ruta raíz del microfrontend de órdenes.
   *
   * @remarks
   * Carga de manera diferida (lazy loading) el componente `OrdersPage`.
   */
  {
    path: '',
    loadComponent: () => import('./pages/orders/orders.page').then((m) => m.OrdersPage),
  },
];