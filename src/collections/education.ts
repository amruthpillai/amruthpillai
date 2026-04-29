import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { type CollectionEntry, defineCollection, getCollection } from "astro:content"

export const educationCollection = defineCollection({
  loader: glob({ base: "./src/content/education", pattern: "**/*.{md,mdx}" }),
  schema: () => {
    return z.object({
      degree: z.string(),
      institution: z.string(),
      location: z.string(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
    })
  },
})

export type Education = CollectionEntry<"education">

const sortByStartDate = (a: Education, b: Education) => {
  return b.data.startDate.getTime() - a.data.startDate.getTime()
}

export const getEducation = async () => {
  const education = await getCollection("education")
  return education.sort(sortByStartDate)
}
