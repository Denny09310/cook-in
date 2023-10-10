import { VitePWA as pwa } from 'vite-plugin-pwa';

export default () =>
  pwa({
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'service-worker.ts',
    devOptions: {
      enabled: true,
      type: 'module',
    },
  });
