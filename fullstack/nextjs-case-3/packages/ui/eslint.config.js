import baseConfig from "@case-study/eslint-config/base";
import reactConfig from "@case-study/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
