// @ts-check

import js from "@eslint/js"
import astroParser from "astro-eslint-parser"
import { defineConfig, globalIgnores } from "eslint/config"
import astro from "eslint-plugin-astro"
import betterTailwindcss from "eslint-plugin-better-tailwindcss"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
  globalIgnores(["dist", ".astro", ".agents", ".claude", ".wrangler"]),

  {
    extends: [betterTailwindcss.configs.recommended],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "src/styles/global.css",
      },
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "better-tailwindcss/enforce-consistent-line-wrapping": "off",
      "better-tailwindcss/no-unknown-classes": [
        "error",
        {
          detectComponentClasses: true,
        },
      ],
    },
  },

  {
    files: ["**/*.{js,jsx,ts,tsx,astro}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: true,
      },
    },
  },

  {
    files: ["**/*.astro"],
    extends: [...astro.configs.recommended],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
])
