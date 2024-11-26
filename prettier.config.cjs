/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  endOfLine: "lf",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^react-router",
    "^@react-router/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "",
    "^~/(.*)$",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
