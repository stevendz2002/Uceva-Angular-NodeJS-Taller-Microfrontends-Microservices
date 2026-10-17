import { Router } from "express";
import { OrdersController } from "./orders.controller";

/**
 * Rutas del módulo de órdenes.
 *
 * @remarks
 * Define los endpoints para la consulta de órdenes y documenta
 * los contratos OpenAPI consumidos por Swagger UI.
 */
export class OrdersRoutes {

  /**
   * Router configurado con los endpoints del módulo de órdenes.
   *
   * @returns Instancia de `Router` de Express
   */
  static get routes(): Router {
    const router = Router();
    const controller = new OrdersController();

    /**
     * @openapi
     * /api/orders:
     *   get:
     *     summary: Obtener listado de órdenes
     *     description: Retorna un listado de 10 órdenes generadas dinámicamente con Faker.js.
     *     tags:
     *       - Orders
     *     responses:
     *       200:
     *         description: Lista de órdenes generada exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Order'
     *       500:
     *         description: Error interno del servidor
     */
    router.get("/", controller.getAllOrders);

    /**
     * @openapi
     * /api/orders/{countOrders}:
     *   get:
     *     summary: Obtener cantidad específica de órdenes
     *     description: Retorna una lista de órdenes según la cantidad solicitada.
     *     tags:
     *       - Orders
     *     parameters:
     *       - in: path
     *         name: countOrders
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de órdenes a generar
     *     responses:
     *       200:
     *         description: Lista de órdenes generada exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Order'
     *       400:
     *         description: Parámetro de cantidad inválido
     *       500:
     *         description: Error interno del servidor
     */
    router.get("/:countOrders", controller.getAllOrders);

    return router;
  }
}
