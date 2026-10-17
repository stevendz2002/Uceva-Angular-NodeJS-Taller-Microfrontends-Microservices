import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { TicketsService } from "./tickets.service";

/**
 * Controlador de tickets de soporte técnico.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con tickets,
 * delegando la lógica de generación y negocio a `TicketsService`.
 */
export class TicketsController {

  /**
   * Servicio de tickets.
   */
  private readonly ticketsService = new TicketsService();

  /**
   * Maneja la petición HTTP para obtener el listado de tickets.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /api/tickets
   * ```
   */
  getAllTickets = (req: Request, res: Response): void => {
    const rawCount = req.params['countTickets'] ?? req.query['count'] ?? 10;
    const count = Number(rawCount) > 0 ? Number(rawCount) : 10;

    setTimeout(() => {
      this.ticketsService
        .getAllTickets(count)
        .then((tickets) => res.status(200).json(tickets))
        .catch((error) => HandleError.error(error, res));
    }, 1000);
  };
}
