const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mf-tickets',
  filename: "remoteEntry.js",
  exposes: {
    './TicketsPage': './src/app/pages/tickets/tickets.page.ts',
    './Component': './src/app/pages/tickets/tickets.page.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
