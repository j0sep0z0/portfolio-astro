/** @type {import("prettier").Config} */
export default {
  // Opciones base
  semi: false,
  printWidth: 120,
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  jsxSingleQuote: false,
  bracketSpacing: true,

  // Opciones de ordenamiento de imports
  importOrder: ["<THIRD_PARTY_MODULES>", "<YOUR_MODULES>", "^@/.*$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderGroupNamespaceSpecifiers: true,

  // Plugins: El orden es IMPORTANTE.
  // 1. Astro debe ir antes para manejar archivos .astro
  // 2. Sort-imports
  // 3. Tailwind debe ir AL FINAL para que pueda ordenar las clases dsp de todo
  plugins: ["prettier-plugin-astro", "@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],

  // Astro overrides
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
