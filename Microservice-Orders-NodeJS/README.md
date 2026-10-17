# Microservice-Orders-NodeJS 📦

Microservicio vertical de **Órdenes / Pedidos** desarrollado en Node.js, Express y TypeScript como parte del **Taller 5 - Microfrontends y Microservicios** de la asignatura **Arquitectura de Software** en la **UCEVA** (Docente: Jesús David Mejía Vergara).

- **Responsable (Integrante 2)**: Jose Sebastian Arenas Moncada
- **Puerto de Ejecución**: `3004`
- **Ruta Base API**: `http://localhost:3004/api/orders`
- **Documentación Swagger OpenAPI**: `http://localhost:3004/api/docs`

---

## 🚀 Arquitectura y Tecnologías

El microservicio implementa una arquitectura en capas desacoplada:

- **Node.js** con motor **Express 5**.
- **TypeScript 5.9** para tipado estático estricto (cero `any`).
- **@faker-js/faker** para la generación de datos simulados realistas.
- **Swagger / OpenAPI 3.0** (`swagger-jsdoc` y `swagger-ui-express`) para la documentación viva de endpoints y esquemas.
- **dotenv** y **env-var** para la gestión robusta de variables de entorno.

### Estructura de Capas
```
Microservice-Orders-NodeJS/
├── public/                 # Contenido web estático
├── src/
│   ├── config/             # Configuración de entorno y especificación OpenAPI
│   │   ├── envs.ts
│   │   ├── swagger.schemas.ts
│   │   └── swagger.ts
│   ├── domain/             # Entidades, interfaces y excepciones del dominio
│   │   ├── erros/
│   │   │   ├── custom.error.ts
│   │   │   └── handle.error.ts
│   │   └── interfaces/
│   │       ├── order.interface.ts
│   │       └── server.interface.ts
│   ├── presentation/       # Controladores, rutas y servidor HTTP Express
│   │   ├── modules/
│   │   │   └── orders/
│   │   │       ├── orders.controller.ts
│   │   │       ├── orders.routes.ts
│   │   │       └── orders.service.ts
│   │   ├── routes.ts
│   │   └── server.ts
│   └── app.ts              # Punto de entrada de la aplicación
├── .env                    # Variables de entorno (PORT=3004)
├── package.json
└── tsconfig.json
```

---

## 📋 Contrato de Datos (`Order`)

El servicio garantiza el siguiente contrato de datos tipado:

```typescript
export interface Order {
  id: string;          // Identificador único (ej: "ORD-001")
  orderNumber: string; // Número de orden (ej: "ORD-2026-1001")
  customerName: string;// Nombre del cliente comprador
  productName: string; // Producto solicitado
  quantity: number;    // Unidades pedidas
  totalPrice: number;  // Monto total facturado
  status: string;      // Estado ("Pendiente" | "En Proceso" | "Entregado" | "Cancelado")
  createdAt: string;   // Timestamp ISO 8601
}
```

---

## 🛠️ Instalación y Ejecución

### 1. Instalación de dependencias
```bash
npm install
```

### 2. Ejecución en modo desarrollo
```bash
npm run start
```

El servidor quedará disponible en `http://localhost:3004`.

---

## 🌐 Endpoints Disponibles

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/orders` | Retorna un listado de 10 órdenes simuladas dinámicas |
| `GET` | `/api/orders/:countOrders` | Retorna una cantidad específica de órdenes solicitadas |
| `GET` | `/api/docs` | Interfaz interactiva de Swagger UI con esquemas OpenAPI |
