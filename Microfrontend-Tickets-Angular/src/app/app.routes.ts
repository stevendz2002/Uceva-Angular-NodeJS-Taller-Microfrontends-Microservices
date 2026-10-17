import { Routes } from '@angular/router';
import { TicketsPage } from './pages/tickets/tickets.page';

/**
 * Definición de las rutas principales de la aplicación Microfrontend-Tickets-Angular.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear la ruta principal
 * al componente TicketsPage.
 *
 * @see {@link TicketsPage}
 */
export const routes: Routes = [
  /**
   * Ruta raíz de tickets.
   *
   * @remarks
   * Renderiza el componente `TicketsPage`, encargado
   * de mostrar y gestionar el listado de tickets de soporte técnico.
   */
  {
    path: '',
    loadComponent: () =>
      import('./pages/tickets/tickets.page').then((m) => m.TicketsPage),
  },
];