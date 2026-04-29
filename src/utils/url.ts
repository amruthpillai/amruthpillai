import type { BlogPost } from "@/collections/blog"

const stripIndexSuffix = (value: string) => {
  if (!value.endsWith("/index")) return value
  return value.slice(0, -"/index".length)
}

export const getBlogPostPath = (post: Pick<BlogPost, "id">) => {
  const slug = stripIndexSuffix(post.id)
  return `/blog/${slug}/`
}

export const getBlogPostSlug = (post: Pick<BlogPost, "id">) => {
  return stripIndexSuffix(post.id)
}

export const toAbsoluteUrl = (pathOrUrl: string, baseUrl: URL) => {
  return new URL(pathOrUrl, baseUrl)
}
