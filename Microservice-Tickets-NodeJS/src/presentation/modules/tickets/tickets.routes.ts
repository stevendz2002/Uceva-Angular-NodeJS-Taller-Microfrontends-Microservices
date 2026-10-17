import { Router } from "express";
import { TicketsController } from "./tickets.controller";

/**
 * Rutas del módulo de Tickets de Soporte Técnico.
 */
export class TicketsRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new TicketsController();

    /**
     * @openapi
     * /api/tickets:
     *   get:
     *     summary: Obtener listado de tickets de soporte técnico
     *     description: Retorna un listado de 10 tickets de soporte generados dinámicamente con Faker.
     *     tags:
     *       - Tickets
     *     responses:
     *       200:
     *         description: Lista de tickets generados exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Ticket'
     *       500:
     *         description: Error interno del servidor
     * /api/tickets/{countTickets}:
     *   get:
     *     summary: Obtener listado parametrizado de tickets
     *     description: Retorna una cantidad personalizada de tickets de soporte generados dinámicamente.
     *     tags:
     *       - Tickets
     *     parameters:
     *       - in: path
     *         name: countTickets
     *         required: false
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de tickets a generar
     *     responses:
     *       200:
     *         description: Lista de tickets generados exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Ticket'
     *       500:
     *         description: Error interno del servidor
     */
    router.get("/", controller.getAllTickets);
    router.get("/:countTickets", controller.getAllTickets);

    return router;
  }
}