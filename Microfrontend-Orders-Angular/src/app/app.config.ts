import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

/**
 * Configuración principal de la aplicación Angular del microfrontend de órdenes.
 *
 * @remarks
 * Este objeto define los *providers* globales utilizados
 * en el arranque de la aplicación mediante la API `bootstrapApplication`.
 *
 * Incluye:
 * - Manejo global de errores del navegador
 * - Configuración optimizada de detección de cambios (Zone.js)
 * - Sistema de enrutamiento interno
 * - Cliente HTTP para consumo de microservicios REST
 *
 * @see {@link bootstrapApplication}
 *
 * @public
 */
export const appConfig: ApplicationConfig = {

  /**
   * Proveedores globales registrados para el microfrontend de órdenes.
   */
  providers: [

    /**
     * Proveedor de listeners globales de errores del navegador.
     */
    provideBrowserGlobalErrorListeners(),

    /**
     * Configuración de la detección de cambios basada en Zone.js con coalescencia de eventos.
     */
    provideZoneChangeDetection({ eventCoalescing: true }),

    /**
     * Proveedor del sistema de enrutamiento con las rutas del microfrontend.
     */
    provideRouter(routes),

    /**
     * Proveedor del cliente HTTP para comunicación con el backend.
     */
    provideHttpClient(),
  ],
};