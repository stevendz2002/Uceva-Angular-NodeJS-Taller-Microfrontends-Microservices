import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Provider, ProviderCategory } from '../../interfaces/providers.interface';

/**
 * Componente de tabla para la visualización de proveedores.
 *
 * @description
 * Renderiza el listado de proveedores en una tabla estructurada y responsiva,
 * presentando atributos como ID, nombre, NIT, contacto y un badge estilizado
 * para la categoría comercial de cada empresa.
 *
 * @remarks
 * Cumple con los lineamientos del Atomic Design (organismo) y consume el componente
 * `BadgeAtom` del sistema de diseño oficial de la asignatura.
 *
 * @example
 * ```html
 * <app-providers-table [providers]="providersList"></app-providers-table>
 * ```
 *
 * @public
 */
@Component({
  selector: 'app-providers-table',
  templateUrl: './providers-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class ProvidersTableComponent {

  /**
   * Colección de proveedores que se renderizan en el cuerpo de la tabla.
   *
   * @type {Provider[]}
   * @default []
   */
  @Input() providers: Provider[] = [];

  /**
   * Mapeo de categorías comerciales de proveedores a variantes de color de BadgeType.
   *
   * @remarks
   * Asignación visual por sector:
   * - 'Tecnología' → 'primary' (Azul)
   * - 'Logística' → 'info' (Cian / Celeste)
   * - 'Alimentos' → 'success' (Verde)
   * - 'Servicios' → 'warning' (Amarillo)
   * - 'Mobiliario' → 'secondary' (Gris)
   */
  readonly categoryMap: Record<ProviderCategory, BadgeType> = {
    'Tecnología': 'primary',
    'Logística': 'info',
    'Alimentos': 'success',
    'Servicios': 'warning',
    'Mobiliario': 'secondary',
  };

  /**
   * Determina la variante visual del badge a partir del nombre de la categoría.
   *
   * @param category Nombre o cadena representativa de la categoría comercial.
   * @returns Variante de color `BadgeType` admitida por el componente `BadgeAtom`.
   *
   * @example
   * ```ts
   * const badgeColor = this.getBadgeType('Tecnología'); // Retorna 'primary'
   * ```
   */
  getBadgeType(category: string): BadgeType {
    const key = category as ProviderCategory;
    return this.categoryMap[key] || 'primary';
  }
}
