/**
 * Interfaz que representa un proveedor en el microfrontend de proveedores.
 *
 * Contiene la información corporativa, fiscal y de contacto necesaria para
 * presentar los datos en la tabla y los componentes visuales del dominio.
 *
 * @remarks
 * Cumple con el contrato estricto de datos del backend (Microservicio NodeJS):
 * - `id`: Identificador único alfanumérico (ej: "PRV-001")
 * - `name`: Razón social o nombre de la empresa
 * - `nit`: Número de Identificación Tributaria con dígito de verificación
 * - `email`: Correo electrónico corporativo
 * - `phone`: Teléfono de contacto
 * - `city`: Ciudad principal
 * - `category`: Categoría o rubro comercial
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

  /** Razón social o nombre comercial de la empresa */
  name: string;

  /** Número de Identificación Tributaria (NIT) */
  nit: string;

  /** Correo electrónico corporativo de contacto */
  email: string;

  /** Número telefónico de atención o contacto */
  phone: string;

  /** Ciudad de operación principal */
  city: string;

  /** Categoría comercial o sector industrial del proveedor */
  category: ProviderCategory | string;
}

/**
 * Categorías válidas para clasificar a los proveedores.
 *
 * @remarks
 * Permite tipar fuertemente las categorías para el mapeo con los badges del sistema de diseño:
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
