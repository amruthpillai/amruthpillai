import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { type CollectionEntry, defineCollection, getCollection } from "astro:content"

export const experienceCollection = defineCollection({
  loader: glob({ base: "./src/content/experience", pattern: "**/*.{md,mdx}" }),
  schema: () => {
    return z.object({
      position: z.string(),
      company: z.string(),
      location: z.string(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
    })
  },
})

export type Experience = CollectionEntry<"experience">

const sortByStartDate = (a: Experience, b: Experience) => {
  return b.data.startDate.getTime() - a.data.startDate.getTime()
}

export const getExperiences = async () => {
  const experiences = await getCollection("experience")
  return experiences.sort(sortByStartDate)
}
