import { Provider } from "../interfaces/providers.interface";

/**
 * Colección de proveedores simulados para pruebas unitarias y entornos de desarrollo.
 *
 * @remarks
 * Proporciona un conjunto de datos estáticos representativos de distintas
 * categorías empresariales y ciudades de Colombia.
 */
export const PROVIDERS_MOCK: Provider[] = [
  {
    id: 'PRV-001',
    name: 'Soluciones Tecnológicas del Valle S.A.S.',
    nit: '900.123.456-1',
    email: 'ventas@solucionestec.com',
    phone: '+57 (602) 224-5501',
    city: 'Tuluá',
    category: 'Tecnología',
  },
  {
    id: 'PRV-002',
    name: 'Logística & Envíos del Pacífico Ltda.',
    nit: '890.987.654-2',
    email: 'contacto@logisticapacifico.co',
    phone: '+57 (602) 225-8899',
    city: 'Cali',
    category: 'Logística',
  },
  {
    id: 'PRV-003',
    name: 'AgroAlimentos del Centro S.A.',
    nit: '800.555.123-3',
    email: 'comercial@agroalimentos.com',
    phone: '+57 (602) 226-3344',
    city: 'Buga',
    category: 'Alimentos',
  },
  {
    id: 'PRV-004',
    name: 'Consultoría Integral de Servicios e Hijos',
    nit: '811.444.777-4',
    email: 'info@consultoriaintegral.com',
    phone: '+57 (602) 227-1122',
    city: 'Medellín',
    category: 'Servicios',
  },
  {
    id: 'PRV-005',
    name: 'Mobiliario & Diseño Corporativo S.A.S.',
    nit: '901.333.222-5',
    email: 'proyectos@mobiliariocorp.com',
    phone: '+57 (602) 228-9900',
    city: 'Bogotá',
    category: 'Mobiliario',
  },
];
