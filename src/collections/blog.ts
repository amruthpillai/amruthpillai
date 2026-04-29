import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { type CollectionEntry, defineCollection, getCollection } from "astro:content"

export const blogCollection = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date(),
      featuredImage: z.optional(image()),
    }),
})

export type BlogPost = CollectionEntry<"blog">

const sortByPublishedAt = (a: BlogPost, b: BlogPost) => {
  return b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
}

export const getBlogPosts = async () => {
  const posts = await getCollection("blog")
  return posts.sort(sortByPublishedAt)
}

export const getRecentBlogPosts = async (limit = 3) => {
  const posts = await getBlogPosts()
  return posts.slice(0, limit)
}
