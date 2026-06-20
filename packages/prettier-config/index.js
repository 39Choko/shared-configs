export default {
  arrowParens: "always",
  bracketSameLine: false,
  objectWrap: "preserve",
  bracketSpacing: true,
  semi: true,
  experimentalOperatorPosition: "end",
  experimentalTernaries: false,
  singleQuote: false,
  jsxSingleQuote: true,
  quoteProps: "as-needed",
  trailingComma: "all",
  singleAttributePerLine: true,
  proseWrap: "preserve",
  insertPragma: false,
  requirePragma: false,
  useTabs: false,
  embeddedLanguageFormatting: "auto",
  printWidth: 120,
  tabWidth: 2,
  plugins: [
    "prettier-plugin-jsdoc",
    "prettier-plugin-packagejson",
    "prettier-plugin-sort-json",
    "@ianvs/prettier-plugin-sort-imports"
  ],
  jsonRecursiveSort: true,
  importOrder: [
    "<TYPES>^(node:)",
    "<TYPES>",
    "<TYPES>^[.]",
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "^[.]"
  ]
}
