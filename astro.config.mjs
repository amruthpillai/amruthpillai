// @ts-check

import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"
import expressiveCode from "astro-expressive-code"
import rehypeSlug from "rehype-slug"
import tsconfigPaths from "vite-tsconfig-paths"

// https://astro.build/config
export default defineConfig({
  site: "https://amruthpillai.com",

  integrations: [react(), expressiveCode(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss(), tsconfigPaths()],
  },

  image: {
    layout: "constrained",
  },

  prefetch: {
    defaultStrategy: "hover",
  },

  markdown: {
    rehypePlugins: [rehypeSlug],
  },

  fonts: [
    {
      name: "Lora",
      cssVariable: "--font-lora",
      provider: fontProviders.google(),
      display: "swap",
      weights: ["400 700"],
      styles: ["normal", "italic"],
    },
    {
      name: "IBM Plex Mono",
      cssVariable: "--font-ibm-plex-mono",
      provider: fontProviders.google(),
      display: "swap",
      weights: ["400", "600"],
      styles: ["normal"],
    },
    {
      name: "Recoleta",
      cssVariable: "--font-recoleta",
      provider: fontProviders.local(),
      display: "swap",
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/Recoleta-Regular.woff2", "./src/assets/fonts/Recoleta-Regular.woff"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/Recoleta-Medium.woff2", "./src/assets/fonts/Recoleta-Medium.woff"],
          },
          {
            weight: 600,
            style: "normal",
            src: ["./src/assets/fonts/Recoleta-SemiBold.woff2", "./src/assets/fonts/Recoleta-SemiBold.woff"],
          },
        ],
      },
    },
  ],
})
