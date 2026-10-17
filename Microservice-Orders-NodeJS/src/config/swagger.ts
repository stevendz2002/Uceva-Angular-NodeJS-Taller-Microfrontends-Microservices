import swaggerJsdoc from 'swagger-jsdoc';

/**
 * Especificación de Swagger (OpenAPI) para la API del Microservicio de Órdenes.
 *
 * @remarks
 * Este objeto configura Swagger mediante `swagger-jsdoc`,
 * generando automáticamente la documentación OpenAPI a partir
 * de comentarios JSDoc presentes en los archivos de rutas.
 *
 * La especificación resultante es consumida por Swagger UI
 * en la ruta `/api/docs`.
 *
 * @example
 * ```ts
 * import swaggerUi from 'swagger-ui-express';
 *
 * app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
 * ```
 */
export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Microservice Orders NodeJS - UCEVA',
      version: '1.0.0',
      description: 'Documentación oficial de la API de Órdenes con Swagger para el Taller de Microfrontends y Microservicios',
    },
    servers: [
      {
        url: 'http://localhost:3004',
        description: 'Servidor local de desarrollo del Microservicio de Órdenes',
      },
    ],
  },
  apis: [
    './src/presentation/modules/**/*.routes.ts',
    './src/config/swagger.schemas.ts',
  ],
});