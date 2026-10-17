import { faker } from '@faker-js/faker';
import { Ticket } from '../../../domain/interfaces/ticket.interface';

/**
 * Servicio encargado de la generación y gestión de tickets de soporte técnico.
 *
 * @remarks
 * Este servicio utiliza la librería `@faker-js/faker` para generar tickets
 * simulados con datos coherentes para pruebas y demostración.
 */
export class TicketsService {

  /**
   * Prioridades disponibles para los tickets.
   */
  private readonly priorities: string[] = [
    'Baja',
    'Media',
    'Alta',
    'Crítica',
  ];

  /**
   * Departamentos responsables de la atención.
   */
  private readonly departments: string[] = [
    'Soporte Técnico',
    'Facturación',
    'Infraestructura',
    'Desarrollo',
    'Seguridad Informática',
  ];

  /**
   * Estados de resolución del ticket.
   */
  private readonly statuses: string[] = [
    'Abierto',
    'En Proceso',
    'Resuelto',
    'Cerrado',
  ];

  /**
   * Obtiene un listado de tickets generados dinámicamente.
   *
   * @param countTickets Cantidad de tickets a generar (por defecto 10)
   * @returns Promesa que resuelve un arreglo de tickets tipados
   *
   * @example
   * ```ts
   * const tickets = await ticketsService.getAllTickets(10);
   * ```
   */
  public async getAllTickets(countTickets: number = 10): Promise<Ticket[]> {
    const tickets: Promise<Ticket>[] = [];

    for (let i = 1; i <= countTickets; i++) {
      tickets.push(this.generateTicket(i));
    }

    return Promise.all(tickets);
  }

  /**
   * Genera un ticket de soporte ficticio con datos coherentes.
   *
   * @param index Índice correlativo para estructurar identificadores
   * @returns Promesa que resuelve un ticket generado
   */
  private generateTicket(index: number): Promise<Ticket> {
    const ticketCode = `TCK-${String(1000 + index)}`;
    const subjectList = [
      'Error de autenticación en portal web',
      'Falla de conexión con base de datos principal',
      'Solicitud de restablecimiento de credenciales',
      'Actualización de certificados SSL vencidos',
      'Lentitud crítica en el servidor de aplicaciones',
      'Configuración de permisos de acceso VPN',
      'Error 500 al procesar factura electrónica',
      'Migración de buzón de correo institucional',
      'Bloqueo preventivo de cuenta por intentos fallidos',
      'Requerimiento de respaldo de información semanal',
    ];

    const subject = subjectList[(index - 1) % subjectList.length] ?? 'Solicitud general de soporte técnico';

    return Promise.resolve({
      id: faker.string.uuid(),
      ticketCode,
      subject,
      requesterEmail: faker.internet.email().toLowerCase(),
      priority: faker.helpers.arrayElement(this.priorities),
      department: faker.helpers.arrayElement(this.departments),
      status: faker.helpers.arrayElement(this.statuses),
      createdAt: faker.date.recent({ days: 30 }).toISOString(),
    });
  }
}
