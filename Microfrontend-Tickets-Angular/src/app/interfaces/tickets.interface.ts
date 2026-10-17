/**
 * Interfaz que representa un ticket de soporte técnico en el frontend.
 *
 * Contiene la información básica requerida para renderizar los tickets
 * dentro de tablas, tarjetas y vistas de soporte técnico.
 *
 * @remarks
 * Cumple estrictamente con el contrato de datos del taller:
 * `id`, `ticketCode`, `subject`, `requesterEmail`, `priority`, `department`, `status`, `createdAt`.
 * Tipado fuerte sin uso de `any`.
 *
 * @example
 * ```ts
 * const ticket: Ticket = {
 *   id: 'e6a2b8e4-18c2-4e89-b54a-714041b6c7f8',
 *   ticketCode: 'TCK-1001',
 *   subject: 'Error al iniciar sesión',
 *   requesterEmail: 'usuario@empresa.com',
 *   priority: 'Alta',
 *   department: 'Soporte Técnico',
 *   status: 'Abierto',
 *   createdAt: '2026-10-16T19:50:00.000Z'
 * };
 * ```
 */
export interface Ticket {
  /** Identificador único universal del ticket */
  id: string;

  /** Código nemotécnico visible del ticket */
  ticketCode: string;

  /** Asunto o título del requerimiento de soporte */
  subject: string;

  /** Correo electrónico del solicitante del ticket */
  requesterEmail: string;

  /** Nivel de prioridad asignado al ticket */
  priority: TicketPriority;

  /** Departamento responsable de atender el requerimiento */
  department: TicketDepartment;

  /** Estado actual de atención del ticket */
  status: TicketStatus;

  /** Fecha y hora ISO 8601 de creación del ticket */
  createdAt: string;
}

/**
 * Niveles válidos de prioridad para un ticket.
 *
 * @remarks
 * Restringe los valores posibles para la prioridad del ticket.
 */
export type TicketPriority = 'Baja' | 'Media' | 'Alta' | 'Crítica' | string;

/**
 * Departamentos válidos para la atención de tickets.
 */
export type TicketDepartment = 'Soporte Técnico' | 'Facturación' | 'Infraestructura' | 'Desarrollo' | 'Seguridad Informática' | string;

/**
 * Estados de ciclo de vida de un ticket.
 */
export type TicketStatus = 'Abierto' | 'En Proceso' | 'Resuelto' | 'Cerrado' | string;
