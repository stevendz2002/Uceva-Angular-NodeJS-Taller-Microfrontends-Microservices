# Microfrontend-Orders-Angular 🛒

Microfrontend vertical del dominio de **Órdenes / Pedidos** desarrollado en **Angular 20** como parte del **Taller 5 - Microfrontends y Microservicios** de la asignatura **Arquitectura de Software** en la **UCEVA** (Docente: Jesús David Mejía Vergara).

- **Responsable (Integrante 2)**: Jose Sebastian Arenas Moncada
- **Puerto de Ejecución**: `4204`
- **Módulo Federado Remoto**: `mf-orders`
- **Exposición Webpack Module Federation**: `./OrdersPage` (`src/app/pages/orders/orders.page.ts`)
- **Punto de Entrada Remoto**: `http://localhost:4204/remoteEntry.js`
- **Consumo de Backend**: `http://localhost:3004/api/orders`

---

## 🏛️ Arquitectura y Principios de Diseño

1. **Microfrontend Standalone & Federado**:
   - Desarrollado como aplicación Angular Standalone (sin `NgModule`).
   - Expone la página `OrdersPage` para su consumo dinámico e independiente desde el contenedor Host (`Client-Host-Angular` en el puerto `4200`).
   - Configurado con Webpack Module Federation clásico mediante `@angular-architects/module-federation`.

2. **Atomic Design & Design System**:
   - Emplea componentes atómicos oficiales de la asignatura: `@brejcha13320/design-system-bootstrap` (`BadgeAtom`, `IconAtom`).
   - Componente organismo `OrdersTableComponent` para el renderizado estructurado con badges visuales de estado.
   - Componente `AlertComponent` para la gestión de estados asíncronos (`loading`, `error`).

3. **Contrato de Datos Estricto (Cero `any`)**:
   Implementa la interfaz `Order` idéntica a la provista por el microservicio Node.js:
   ```typescript
   export interface Order {
     id: string;          // Identificador alfanumérico (ej: "ORD-001")
     orderNumber: string; // Consecutivo de orden (ej: "ORD-2026-1001")
     customerName: string;// Nombre del cliente
     productName: string; // Producto solicitado
     quantity: number;    // Unidades
     totalPrice: number;  // Valor total
     status: string;      // Estado ("Pendiente" | "En Proceso" | "Entregado" | "Cancelado")
     createdAt: string;   // Timestamp ISO 8601
   }
   ```

4. **Documentación Compodoc al 100%**:
   Todos los elementos de código (clases, interfaces, propiedades, `@Input()`, constructores y métodos) están comentados en español mediante bloques formales JSDoc `/** ... */`.

5. **Pruebas Unitarias con Jest (>90% de Cobertura)**:
   Suite de pruebas automatizadas que cubren casos de éxito, errores HTTP, estados vacíos y mapeo de badges.

---

## 🛠️ Comandos de Desarrollo

### 1. Instalación de dependencias
```bash
npm install
```

### 2. Ejecutar servidor de desarrollo (Puerto 4204)
```bash
npm run start
```
Acceder a la aplicación independiente en `http://localhost:4204` y verificar el archivo de federación en `http://localhost:4204/remoteEntry.js`.

### 3. Ejecutar pruebas unitarias en Jest
```bash
npm run test
```

### 4. Generar reporte de cobertura de código
```bash
npm run test:coverage
```

### 5. Generar documentación técnica con Compodoc
```bash
npm run compodoc
```

---

## 🧩 Integración en el Host (`Client-Host-Angular`)

Para integrar este microfrontend en el Shell principal:
- **Puerto**: `4204`
- **Remote Entry**: `http://localhost:4204/remoteEntry.js`
- **Módulo Expuesto**: `./OrdersPage`
- **Ruta del Host**: `/orders`
