import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'http://localhost:5297/swagger/v1/swagger.json',
  apiFile: '~/app/api',
  outputFiles: {
    'src/app/services/recipes.ts': {
      filterEndpoints: [/recipes?/i],
    },
  },
  tag: true,
  hooks: { lazyQueries: true, mutations: true, queries: true },
};

export default config;
