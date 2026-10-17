import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { ProvidersService } from "./providers.service";

/**
 * Controlador de proveedores.
 *
 * @remarks
 * Esta clase atiende las solicitudes HTTP dirigidas al dominio de proveedores,
 * delegando la generación y obtención de datos a la clase `ProvidersService`.
 */
export class ProvidersController {

  /**
   * Instancia del servicio de proveedores.
   */
  private readonly providersService = new ProvidersService();

  /**
   * Atiende la petición HTTP GET para obtener el listado de proveedores.
   *
   * @remarks
   * Si no se suministra el parámetro `countProviders` en la ruta, se generan
   * por defecto 10 registros según el estándar del taller.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /api/providers
   * GET /api/providers/10
   * ```
   */
  getAllProviders = (req: Request, res: Response): void => {
    const { countProviders } = req.params;
    const count = countProviders ? Number(countProviders) : 10;

    setTimeout(() => {
      this.providersService
        .getAllProviders(count)
        .then((providers) => res.status(200).json(providers))
        .catch((error) => HandleError.error(error, res));
    }, 1000);
  };
}
