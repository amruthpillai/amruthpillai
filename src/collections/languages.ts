import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { type CollectionEntry, defineCollection, getCollection } from "astro:content"

export const languagesCollection = defineCollection({
  loader: glob({ base: "./src/content/languages", pattern: "**/*.{md,mdx}" }),
  schema: () => {
    return z.object({
      order: z.coerce.number().int().min(1),
      name: z.string(),
      proficiency: z.string(),
    })
  },
})

export type Language = CollectionEntry<"languages">

const sortByOrder = (a: Language, b: Language) => {
  return a.data.order - b.data.order
}

export const getLanguages = async () => {
  const languages = await getCollection("languages")
  return languages.sort(sortByOrder)
}
