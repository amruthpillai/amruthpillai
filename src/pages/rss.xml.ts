import rss from "@astrojs/rss"
import type { APIContext } from "astro"

import { getBlogPosts } from "@/collections/blog"
import { site } from "@/data/site"
import { getBlogPostPath } from "@/utils/url"

export async function GET(context: APIContext) {
  const posts = await getBlogPosts()

  return rss({
    title: site.name,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      content: post.body,
      pubDate: post.data.publishedAt,
      link: getBlogPostPath(post),
    })),
  })
}
