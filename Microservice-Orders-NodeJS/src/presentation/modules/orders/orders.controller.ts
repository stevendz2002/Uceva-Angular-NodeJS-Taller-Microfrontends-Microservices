import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { OrdersService } from "./orders.service";

/**
 * Controlador del módulo de órdenes.
 *
 * @remarks
 * Atiende las solicitudes HTTP dirigidas al dominio de órdenes,
 * delegando la generación y obtención de datos a la clase `OrdersService`.
 */
export class OrdersController {

  /**
   * Instancia del servicio de órdenes.
   */
  private readonly ordersService = new OrdersService();

  /**
   * Atiende la petición HTTP GET para obtener el listado de órdenes.
   *
   * @remarks
   * Si no se suministra el parámetro `countOrders` en la ruta, se generan
   * por defecto 10 registros según el estándar del taller.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /api/orders
   * GET /api/orders/10
   * ```
   */
  getAllOrders = (req: Request, res: Response): void => {
    const { countOrders } = req.params;
    const count = countOrders ? Number(countOrders) : 10;

    setTimeout(() => {
      this.ordersService
        .getAllOrders(count)
        .then((orders) => res.status(200).json(orders))
        .catch((error) => HandleError.error(error, res));
    }, 1000);
  };
}
