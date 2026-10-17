/**
 * Interfaz que representa un proveedor del sistema.
 *
 * Contiene la información corporativa y tributaria necesaria para identificar
 * y clasificar al proveedor en los procesos de compras y suministros.
 *
 * @remarks
 * Cada proveedor debe contar con identificación única, NIT válido,
 * datos de contacto corporativo y categoría asignada.
 *
 * @example
 * ```ts
 * const provider: Provider = {
 *   id: 'PRV-001',
 *   name: 'Distribuciones Andina S.A.S.',
 *   nit: '900.123.456-7',
 *   email: 'contacto@andina.com',
 *   phone: '+57 (602) 224-5566',
 *   city: 'Tuluá',
 *   category: 'Tecnología'
 * };
 * ```
 */
export interface Provider {
  /** Identificador único del proveedor */
  id: string;

  /** Razón social o nombre comercial del proveedor */
  name: string;

  /** Número de Identificación Tributaria (NIT) */
  nit: string;

  /** Correo electrónico corporativo de contacto */
  email: string;

  /** Teléfono de contacto */
  phone: string;

  /** Ciudad de operación o sede principal */
  city: string;

  /** Categoría o rubro de suministro */
  category: ProviderCategory;
}

/**
 * Tipo que restringe las categorías de proveedores.
 *
 * @remarks
 * Define las industrias o rubros de suministro válidos en el sistema:
 * - 'Tecnología'
 * - 'Logística'
 * - 'Alimentos'
 * - 'Servicios'
 * - 'Mobiliario'
 *
 * @example
 * ```ts
 * const categoria: ProviderCategory = 'Tecnología';
 * ```
 */
export type ProviderCategory = 'Tecnología' | 'Logística' | 'Alimentos' | 'Servicios' | 'Mobiliario';
