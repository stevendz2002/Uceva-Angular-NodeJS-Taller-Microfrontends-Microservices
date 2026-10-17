import { Router } from "express";
import { OrdersRoutes } from "./modules/orders/orders.routes";

/**
 * Clase encargada de centralizar todas las rutas de la aplicación.
 *
 * @remarks
 * Proporciona un único punto de acceso a los endpoints
 * del microservicio de órdenes.
 *
 * @example
 * ```ts
 * import express from 'express';
 * import { AppRoutes } from './presentation/routes';
 *
 * const app = express();
 * app.use(AppRoutes.routes);
 * ```
 */
export class AppRoutes {

  /**
   * Devuelve el router principal de la aplicación con la ruta base de órdenes.
   *
   * @returns Router de Express con todas las rutas registradas
   */
  static get routes(): Router {
    const router = Router();

    // Definir rutas del microservicio de órdenes
    router.use("/api/orders", OrdersRoutes.routes);

    return router;
  }
}