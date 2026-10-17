import { Ticket } from "../interfaces/tickets.interface";

/**
 * Datos simulados de tickets de soporte técnico para pruebas y entorno de desarrollo.
 */
export const TICKETS_MOCK: Ticket[] = [
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    ticketCode: "TCK-1001",
    subject: "Error de autenticación en portal web",
    requesterEmail: "carlos.mendoza@empresa.com",
    priority: "Alta",
    department: "Desarrollo",
    status: "Abierto",
    createdAt: "2026-10-15T14:30:00.000Z",
  },
  {
    id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    ticketCode: "TCK-1002",
    subject: "Falla de conexión con base de datos principal",
    requesterEmail: "laura.gomez@empresa.com",
    priority: "Crítica",
    department: "Infraestructura",
    status: "En Proceso",
    createdAt: "2026-10-16T08:15:00.000Z",
  },
  {
    id: "7ca8c921-aeba-22e2-91c5-11d15fe541d9",
    ticketCode: "TCK-1003",
    subject: "Solicitud de restablecimiento de credenciales",
    requesterEmail: "mario.lopez@empresa.com",
    priority: "Baja",
    department: "Soporte Técnico",
    status: "Resuelto",
    createdAt: "2026-10-16T10:00:00.000Z",
  },
];
