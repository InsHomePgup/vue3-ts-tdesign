import { defineConfig } from 'orval'

export default defineConfig({
  example: {
    input: 'src/api/specs/example.yaml',
    output: {
      target: 'src/api/generated/example.ts',
      schemas: 'src/api/generated/models',
      client: 'fetch',
      override: {
        mutator: {
          path: 'src/utils/request.ts',
          name: 'request',
        },
      },
    },
  },
})
