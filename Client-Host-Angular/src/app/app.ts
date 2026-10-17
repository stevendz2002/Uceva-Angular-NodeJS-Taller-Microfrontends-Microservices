import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarConfig, NavbarOrganism } from '@brejcha13320/design-system-bootstrap';

/**
 * Componente raíz del Host de la solución (`Client-Host-Angular`).
 *
 * @remarks
 * Este componente actúa como contenedor principal (Shell) de la arquitectura
 * de microfrontends. Configura la barra de navegación global (`NavbarOrganism`)
 * y renderiza los microfrontends federados a través del `<router-outlet />`.
 *
 * Enlaces disponibles en el menú de navegación:
 * - **Usuarios**: Microfrontend base en el puerto 4201.
 * - **Productos**: Microfrontend base en el puerto 4202.
 * - **Proveedores**: Microfrontend del Integrante 1 en el puerto 4203.
 * - **Órdenes**: Microfrontend del Integrante 2 en el puerto 4204.
 * - **Tickets**: Microfrontend del Integrante 3 en el puerto 4205.
 *
 * @public
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet, NavbarOrganism],
})
export class App {

  /**
   * Configuración de la barra de navegación principal.
   *
   * @remarks
   * Define el título, icono institucional y enlaces de enrutamiento
   * hacia cada uno de los microfrontends del sistema.
   *
   * @type {NavbarConfig}
   */
  navbarConfig: NavbarConfig = {
    title: 'Angular Client - UCEVA',
    iconConfig: {
      icon: 'bootstrap',
      size: 2,
    },
    navLinks: [
      { text: 'Usuarios', url: '/users' },
      { text: 'Productos', url: '/products' },
      { text: 'Proveedores', url: '/providers' },
      { text: 'Órdenes', url: '/orders' },
      { text: 'Tickets', url: '/tickets' },
    ],
  };
}