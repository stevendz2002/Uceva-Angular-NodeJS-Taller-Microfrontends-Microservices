import { Routes } from '@angular/router';

/**
 * Definición de las rutas del microfrontend de proveedores para ejecución autónoma.
 *
 * @remarks
 * Mapea la ruta raíz hacia el componente `ProvidersPage`.
 *
 * @see {@link ProvidersPage}
 */
export const routes: Routes = [
  /**
   * Ruta raíz de proveedores.
   */
  {
    path: '',
    loadComponent: () => import('./pages/providers/providers.page').then((m) => m.ProvidersPage),
  },
];