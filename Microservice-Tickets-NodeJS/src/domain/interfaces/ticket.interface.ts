/**
 * Interfaz que representa un ticket de soporte técnico.
 *
 * Contiene la información básica necesaria para mostrar y gestionar
 * un ticket en el sistema de soporte técnico.
 *
 * @remarks
 * Cumple con el contrato estricto de datos de la arquitectura del taller:
 * id, ticketCode, subject, requesterEmail, priority, department, status, createdAt.
 *
 * @example
 * ```ts
 * const ticket: Ticket = {
 *   id: 'e6a2b8e4-18c2-4e89-b54a-714041b6c7f8',
 *   ticketCode: 'TCK-849201',
 *   subject: 'Fallo en la conexión a la base de datos principal',
 *   requesterEmail: 'andres.saavedra@uceva.edu.co',
 *   priority: 'Alta',
 *   department: 'Infraestructura',
 *   status: 'En Proceso',
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

  /** Correo electrónico del solicitante */
  requesterEmail: string;

  /** Nivel de prioridad asignado al ticket */
  priority: string;

  /** Departamento responsable de atender el requerimiento */
  department: string;

  /** Estado actual de gestión del ticket */
  status: string;

  /** Fecha y hora ISO 8601 de creación del ticket */
  createdAt: string;
}
