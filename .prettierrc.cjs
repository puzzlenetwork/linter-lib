/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
module.exports = {
    useTabs: false,
    tabWidth: 2,
    singleQuote: false,
    trailingComma: "all",
    semi: true,
    jsxSingleQuote: false,
    bracketSpacing: true,
    arrowParens: "always",
    bracketSpacing: true,
    printWidth: 100,
    endOfLine: "lf",
    plugins: ["@trivago/prettier-plugin-sort-imports"],
    importOrder: ["^react$", "<THIRD_PARTY_MODULES>", "^@base/", "^@/", "^[./]"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderGroupNamespaceSpecifiers: true,
    importOrderCaseInsensitive: true,
};
