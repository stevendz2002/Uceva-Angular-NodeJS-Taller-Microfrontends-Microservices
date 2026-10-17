/**
 * @openapi
 * components:
 *   schemas:
 *     Provider:
 *       type: object
 *       description: Representa un proveedor del sistema
 *       required:
 *         - id
 *         - name
 *         - nit
 *         - email
 *         - phone
 *         - city
 *         - category
 *       properties:
 *         id:
 *           type: string
 *           example: "PRV-001"
 *           description: Identificador único del proveedor
 *         name:
 *           type: string
 *           example: "Distribuciones Andina S.A.S."
 *           description: Razón social o nombre comercial del proveedor
 *         nit:
 *           type: string
 *           example: "900.123.456-7"
 *           description: Número de Identificación Tributaria (NIT)
 *         email:
 *           type: string
 *           example: "contacto@andina.com"
 *           description: Correo electrónico corporativo
 *         phone:
 *           type: string
 *           example: "+57 (602) 224-5566"
 *           description: Teléfono de contacto
 *         city:
 *           type: string
 *           example: "Tuluá"
 *           description: Ciudad de operación
 *         category:
 *           type: string
 *           enum:
 *             - Tecnología
 *             - Logística
 *             - Alimentos
 *             - Servicios
 *             - Mobiliario
 *           example: "Tecnología"
 *           description: Categoría de suministro
 */
export {};