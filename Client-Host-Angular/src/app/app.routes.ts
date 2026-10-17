import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

/**
 * Definición de las rutas principales del Host de Microfrontends (`Client-Host-Angular`).
 *
 * @remarks
 * Este archivo centraliza la integración dinámica de los microfrontends mediante
 * Webpack Module Federation (`loadRemoteModule`), permitiendo la carga bajo demanda
 * de los módulos desarrollados por cada integrante del equipo:
 * - `users` (Puerto 4201): Módulo base de usuarios
 * - `products` (Puerto 4202): Módulo base de productos
 * - `providers` (Puerto 4203): Módulo de proveedores (Integrante 1)
 * - `orders` (Puerto 4204): Módulo de órdenes (Integrante 2)
 * - `tickets` (Puerto 4205): Módulo de tickets (Integrante 3)
 *
 * @see {@link loadRemoteModule}
 */
export const routes: Routes = [
  /**
   * Ruta de usuarios (Base).
   *
   * @remarks
   * Renderiza el componente `UsersPage` federado desde el puerto 4201.
   */
  {
    path: 'users',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './UsersPage',
      }).then(m => m.UsersPage),
  },

  /**
   * Ruta de productos (Base).
   *
   * @remarks
   * Renderiza el componente `ProductsPage` federado desde el puerto 4202.
   */
  {
    path: 'products',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './ProductsPage',
      }).then(m => m.ProductsPage),
  },

  /**
   * Ruta de proveedores (Par 1 - Integrante 1).
   *
   * @remarks
   * Renderiza el componente `ProvidersPage` federado desde el puerto 4203.
   */
  {
    path: 'providers',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        exposedModule: './ProvidersPage',
      }).then(m => m.ProvidersPage),
  },

  /**
   * Ruta de órdenes (Par 2 - Integrante 2).
   *
   * @remarks
   * Renderiza el componente `OrdersPage` federado desde el puerto 4204.
   */
  {
    path: 'orders',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4204/remoteEntry.js',
        exposedModule: './OrdersPage',
      }).then(m => m.OrdersPage),
  },

  /**
   * Ruta de tickets (Par 3 - Integrante 3).
   *
   * @remarks
   * Renderiza el componente `TicketsPage` federado desde el puerto 4205.
   */
  {
    path: 'tickets',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4205/remoteEntry.js',
        exposedModule: './TicketsPage',
      }).then(m => m.TicketsPage),
  },

  /**
   * Ruta comodín / fallback.
   *
   * @remarks
   * Captura cualquier ruta desconocida y redirige automáticamente a `users`.
   */
  {
    path: '**',
    redirectTo: 'users',
  },
];