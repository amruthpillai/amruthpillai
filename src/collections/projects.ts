import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { type CollectionEntry, defineCollection, getCollection } from "astro:content"

export const projectsCollection = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: () => {
    return z.object({
      order: z.coerce.number().min(1),
      title: z.string(),
      links: z.array(
        z.object({
          label: z.string(),
          href: z.url(),
        })
      ),
    })
  },
})

export type Project = CollectionEntry<"projects">

const sortByOrder = (a: Project, b: Project) => {
  return a.data.order - b.data.order
}

export const getProjects = async () => {
  const projects = await getCollection("projects")
  return projects.sort(sortByOrder)
}
