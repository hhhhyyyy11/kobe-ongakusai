import nextPlugin from "@next/eslint-plugin-next";

const eslintConfig = [
  nextPlugin.flatConfig.coreWebVitals,
  {
    ignores: ["node_modules/", ".next/", "out/"],
  },
];

export default eslintConfig;
