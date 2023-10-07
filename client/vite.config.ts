/// <reference types="vitest" />

import { defineConfig } from 'vite';
import path from 'node:path';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import sass from 'vite-plugin-sass-dts';
import { VitePWA as pwa } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy(),
    sass({
      global: {
        generate: true,
        outputFilePath: path.resolve(__dirname, './src/style.d.ts'),
      },
    }),
    pwa({ registerType: 'autoUpdate' }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles" as common;`,
        importer(...args) {
          if (args[0] !== '@/styles') {
            return;
          }

          return {
            file: `${path.resolve(__dirname, 'src/theme/variables')}`,
          };
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (/@ionic|@stencil/i.test(id)) return 'ionic';
          if (/redux|rtk/i.test(id)) return 'redux';
        },
      },
    },
  },
});
