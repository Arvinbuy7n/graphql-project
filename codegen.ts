import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000",
  generates: {
    "src/graphql/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
