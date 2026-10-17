import { Router } from "express";
import { ProvidersController } from "./providers.controller";

/**
 * Rutas del módulo de proveedores.
 *
 * @remarks
 * Define los endpoints para la consulta de proveedores y documenta
 * los contratos OpenAPI consumidos por Swagger UI.
 */
export class ProvidersRoutes {

  /**
   * Router configurado con los endpoints del módulo de proveedores.
   *
   * @returns Instancia de `Router` de Express
   */
  static get routes(): Router {
    const router = Router();
    const controller = new ProvidersController();

    /**
     * @openapi
     * /api/providers:
     *   get:
     *     summary: Obtener listado de proveedores
     *     description: Retorna un listado de 10 proveedores generados dinámicamente con Faker.js.
     *     tags:
     *       - Providers
     *     responses:
     *       200:
     *         description: Lista de proveedores generada exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Provider'
     *       500:
     *         description: Error interno del servidor
     */
    router.get("/", controller.getAllProviders);

    /**
     * @openapi
     * /api/providers/{countProviders}:
     *   get:
     *     summary: Obtener cantidad específica de proveedores
     *     description: Retorna una lista de proveedores según la cantidad solicitada.
     *     tags:
     *       - Providers
     *     parameters:
     *       - in: path
     *         name: countProviders
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de proveedores a generar
     *     responses:
     *       200:
     *         description: Lista de proveedores generada exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Provider'
     *       400:
     *         description: Parámetro de cantidad inválido
     *       500:
     *         description: Error interno del servidor
     */
    router.get("/:countProviders", controller.getAllProviders);

    return router;
  }
}
