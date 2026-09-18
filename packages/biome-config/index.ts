export const config = {
  $schema: "https://biomejs.dev/schemas/2.5.14/schema.json",
  vcs: { enabled: true, clientKind: "git", useIgnoreFile: true },
  formatter: {
    enabled: true,
    useEditorconfig: true,
    formatWithErrors: false,
    indentStyle: "space",
    indentWidth: 2,
    lineEnding: "lf",
    lineWidth: 120,
    attributePosition: "auto",
    bracketSpacing: true,
  },
  assist: {
    actions: {
      source: {
        organizeImports: "on",
      },
    },
  },
  linter: {
    enabled: true,
    rules: {},
  },
  javascript: {
    formatter: {
      jsxQuoteStyle: "single",
      quoteProperties: "asNeeded",
      trailingCommas: "all",
      semicolons: "always",
      arrowParentheses: "always",
      bracketSameLine: false,
      quoteStyle: "double",
      attributePosition: "auto",
      bracketSpacing: true,
    },
  },
} as const;
