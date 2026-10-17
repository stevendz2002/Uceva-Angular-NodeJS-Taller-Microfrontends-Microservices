/**
 * @openapi
 * components:
 *   schemas:
 *     Ticket:
 *       type: object
 *       description: Representa un ticket de soporte técnico del sistema
 *       required:
 *         - id
 *         - ticketCode
 *         - subject
 *         - requesterEmail
 *         - priority
 *         - department
 *         - status
 *         - createdAt
 *       properties:
 *         id:
 *           type: string
 *           example: "e6a2b8e4-18c2-4e89-b54a-714041b6c7f8"
 *         ticketCode:
 *           type: string
 *           example: "TCK-849201"
 *         subject:
 *           type: string
 *           example: "Fallo en la conexión a la base de datos principal"
 *         requesterEmail:
 *           type: string
 *           format: email
 *           example: "andres.saavedra@uceva.edu.co"
 *         priority:
 *           type: string
 *           enum:
 *             - Baja
 *             - Media
 *             - Alta
 *             - Crítica
 *           example: "Alta"
 *         department:
 *           type: string
 *           enum:
 *             - Soporte Técnico
 *             - Facturación
 *             - Infraestructura
 *             - Desarrollo
 *           example: "Infraestructura"
 *         status:
 *           type: string
 *           enum:
 *             - Abierto
 *             - En Proceso
 *             - Resuelto
 *             - Cerrado
 *           example: "En Proceso"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2026-10-16T19:50:00.000Z"
 */
export {};