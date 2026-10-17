import { Component, inject, OnInit } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { ProvidersTableComponent } from '../../components/providers-table/providers-table.component';
import { Provider } from '../../interfaces/providers.interface';
import { State } from '../../interfaces/state.interface';
import { ProvidersService } from '../../services/providers/providers.service';

/**
 * Página principal del microfrontend de proveedores.
 *
 * @description
 * Gestiona el ciclo de vida, los estados asíncronos (carga, éxito, error)
 * y la comunicación con el microservicio a través de `ProvidersService`.
 *
 * @remarks
 * Esta página es expuesta vía Webpack Module Federation (`remoteEntry.js`)
 * bajo el token `./ProvidersPage` para ser consumida e incrustada por `Client-Host-Angular`.
 *
 * @example
 * ```html
 * <app-providers></app-providers>
 * ```
 *
 * @public
 */
@Component({
  selector: 'app-providers',
  templateUrl: './providers.page.html',
  imports: [ProvidersTableComponent, AlertComponent],
})
export class ProvidersPage implements OnInit {

  /**
   * Listado de proveedores cargados exitosamente desde el microservicio.
   *
   * @type {Provider[]}
   * @default []
   */
  providers: Provider[] = [];

  /**
   * Estado de ejecución actual de la vista para control reactivo de la UI.
   *
   * @type {State}
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Instancia inyectada del servicio de proveedores.
   */
  private readonly providersService = inject(ProvidersService);

  /**
   * Gancho de ciclo de vida ejecutado tras la inicialización del componente.
   *
   * @remarks
   * Pasa el estado a `'loading'` e invoca al microservicio para cargar
   * los proveedores correspondientes.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.providersService.getAllProviders().subscribe({
      next: (providers: Provider[]) => {
        this.providers = providers;
        this.state = 'success';
      },
      error: (error: unknown) => {
        console.error('Error al consultar microservicio de proveedores:', error);
        this.state = 'error';
      },
    });
  }
}
