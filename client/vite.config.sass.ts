import sass from 'vite-plugin-sass-dts';
import path from 'node:path';

export const css = {
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
};

export default () =>
  sass({
    global: {
      generate: true,
      outputFilePath: path.resolve(__dirname, './src/style.d.ts'),
    },
  });
