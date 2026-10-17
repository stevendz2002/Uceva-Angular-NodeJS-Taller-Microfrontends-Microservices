const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

/**
 * Configuración de Webpack Module Federation para Client-Host-Angular (Puerto 4200).
 *
 * @remarks
 * Actúa como el Shell principal que consume dinámicamente los microfrontends:
 * - mf-users (4201)
 * - mf-products (4202)
 * - mf-providers (4203)
 * - mf-orders (4204)
 * - mf-tickets (4205)
 *
 * Comparte todas las dependencias críticas de Angular y Bootstrap en modo singleton
 * para evitar duplicación en memoria y conflictos de runtime.
 */
module.exports = withModuleFederationPlugin({
  name: 'Client-Host-Angular',
  exposes: {
    './Component': './src/app/app.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
