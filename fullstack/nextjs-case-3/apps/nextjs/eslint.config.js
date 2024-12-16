import baseConfig, { restrictEnvAccess } from "@case-study/eslint-config/base";
import nextjsConfig from "@case-study/eslint-config/nextjs";
import reactConfig from "@case-study/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
