import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers"
import { defineEcConfig } from "astro-expressive-code"

export default defineEcConfig({
  plugins: [pluginLineNumbers()],
  themes: ["github-light", "github-dark"],
  styleOverrides: {
    frames: {
      frameBoxShadowCssValue: "0 0 0 0 var(--color-border)",
    },
  },
})
