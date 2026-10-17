import { faker } from '@faker-js/faker';
import { Provider, ProviderCategory } from '../../../domain/interfaces/provider.interface';

/**
 * Servicio encargado de la generación y gestión de datos de proveedores.
 *
 * @remarks
 * Este servicio implementa la generación de proveedores simulados
 * utilizando la librería `@faker-js/faker`, garantizando datos realistas
 * para pruebas y desarrollo dentro de la arquitectura de microservicios.
 */
export class ProvidersService {

  /**
   * Listado de categorías de proveedores válidas.
   *
   * @remarks
   * Se emplean para asignar aleatoriamente el rubro comercial
   * a cada proveedor generado.
   */
  private categories: ProviderCategory[] = [
    'Tecnología',
    'Logística',
    'Alimentos',
    'Servicios',
    'Mobiliario',
  ];

  /**
   * Obtiene un listado de proveedores generados dinámicamente.
   *
   * @param countProviders Cantidad de proveedores a generar (por defecto 10)
   * @returns Promesa que resuelve un arreglo de objetos `Provider`
   *
   * @example
   * ```ts
   * const providers = await providersService.getAllProviders(10);
   * ```
   */
  public async getAllProviders(countProviders: number = 10): Promise<Provider[]> {
    const providers: Promise<Provider>[] = [];

    for (let i = 1; i <= countProviders; i++) {
      providers.push(this.generateProvider(i));
    }

    return Promise.all(providers);
  }

  /**
   * Genera un registro simulado de proveedor.
   *
   * @param index Índice consecutivo para construir el identificador
   * @returns Promesa que resuelve una instancia de `Provider`
   */
  private generateProvider(index: number): Promise<Provider> {
    const nitNumber = faker.number.int({ min: 800000000, max: 999999999 });
    const nitCheckDigit = faker.number.int({ min: 0, max: 9 });

    return Promise.resolve({
      id: `PRV-${String(index).padStart(3, '0')}`,
      name: `${faker.company.name()} ${faker.helpers.arrayElement(['S.A.S.', 'Ltda.', 'S.A.', 'e Hijos'])}`,
      nit: `${nitNumber}-${nitCheckDigit}`,
      email: faker.internet.email().toLowerCase(),
      phone: faker.phone.number({ style: 'national' }),
      city: faker.location.city(),
      category: faker.helpers.arrayElement(this.categories),
    });
  }
}
