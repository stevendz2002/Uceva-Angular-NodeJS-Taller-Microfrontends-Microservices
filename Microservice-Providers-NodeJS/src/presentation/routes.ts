import { Router } from "express";
import { ProvidersRoutes } from "./modules/providers/providers.routes";

/**
 * Clase encargada de centralizar todas las rutas de la aplicación.
 *
 * @remarks
 * Proporciona un único punto de acceso a los endpoints
 * del microservicio de proveedores.
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
   * Devuelve el router principal de la aplicación.
   *
   * @returns Router de Express con todas las rutas registradas
   */
  static get routes(): Router {
    const router = Router();

    // Definir rutas del módulo de proveedores
    router.use("/api/providers", ProvidersRoutes.routes);

    return router;
  }
}