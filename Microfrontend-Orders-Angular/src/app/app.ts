import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente raíz del Microfrontend de Órdenes (`Microfrontend-Orders-Angular`).
 *
 * @remarks
 * Este componente actúa como punto de entrada y contenedor principal de la aplicación,
 * proveyendo el `<router-outlet />` para renderizar las vistas enrutadas.
 *
 * @public
 */
@Component({
  selector: 'app-root',
  template: '<router-outlet />',
  styleUrl: './app.scss',
  imports: [RouterOutlet],
})
export class App {}