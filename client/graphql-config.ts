import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:5297/graphql',
  documents: 'src/**/*.graphql',
  generates: {
    'src/graphql/types.generated.ts': {
      plugins: ['typescript', 'typescript-resolvers', 'typescript-rtk-query'],
      config: {
        importBaseApiFrom: 'src/app/api',
        overrideExisting: 'module.hot?.status() === "apply"',
        exportHooks: true,
        maybeValue: 'T',
      },
    },
  },
};
export default config;
