import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../../interfaces/providers.interface';

/**
 * Servicio encargado de la gestión y consumo de proveedores.
 *
 * @description
 * Proporciona métodos para consultar la información de proveedores
 * desde el backend `Microservice-Providers-NodeJS` a través de peticiones HTTP.
 *
 * @remarks
 * Se conecta al endpoint oficial en el puerto 3003: `http://localhost:3003/api/providers`.
 *
 * @example
 * ```ts
 * const providersService = inject(ProvidersService);
 * providersService.getAllProviders().subscribe(data => console.log(data));
 * ```
 *
 * @public
 */
@Injectable({
  providedIn: 'root',
})
export class ProvidersService {

  /**
   * URL base de la API de proveedores expuesta por el microservicio Node.js.
   */
  private readonly apiUrl: string = 'http://localhost:3003/api/providers';

  /**
   * Cliente HTTP de Angular para la ejecución de peticiones REST.
   */
  private readonly httpClient: HttpClient = inject(HttpClient);

  /**
   * Obtiene la lista de proveedores desde el microservicio.
   *
   * @param count Cantidad opcional de registros a solicitar. Si no se proporciona, consulta la raíz `/api/providers`.
   * @returns `Observable<Provider[]>` con el arreglo de proveedores tipado.
   *
   * @example
   * ```ts
   * this.providersService.getAllProviders().subscribe((providers: Provider[]) => {
   *   this.providers = providers;
   * });
   * ```
   */
  getAllProviders(count?: number): Observable<Provider[]> {
    const targetUrl = count !== undefined ? `${this.apiUrl}/${count}` : this.apiUrl;
    return this.httpClient.get<Provider[]>(targetUrl);
  }
}
