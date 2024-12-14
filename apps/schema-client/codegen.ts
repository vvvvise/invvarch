/* eslint-disable import/no-extraneous-dependencies */
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  documents: ['src/**/*'],
  generates: {
    './dist/': {
      preset: 'client',
      config: {
        documentMode: 'string',
      },
    },
  },
  // hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;
