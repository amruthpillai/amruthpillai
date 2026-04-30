import getReadingTime from "reading-time"

import type { BlogPost } from "@/collections/blog"

import { formatDate } from "./date"

export function getPostMetadata(post: BlogPost) {
  const body = post.body?.toString() ?? ""
  const { text: readingTime, minutes } = getReadingTime(body)

  return {
    date: post.data.publishedAt.toISOString(),
    formattedDate: formatDate(post.data.publishedAt),
    readingTime,
    readingMinutes: Math.ceil(minutes),
    tags: post.data.tags ?? [],
  }
}

export function getAllTags(posts: BlogPost[]) {
  return [...new Set(posts.flatMap((post) => post.data.tags ?? []))].sort((a, b) => a.localeCompare(b))
}

export function getRelatedPosts(post: BlogPost, posts: BlogPost[], limit = 3) {
  const tags = new Set(post.data.tags ?? [])

  return posts
    .filter((candidate) => candidate.id !== post.id)
    .map((candidate) => {
      const overlap = (candidate.data.tags ?? []).filter((tag) => tags.has(tag)).length
      return { candidate, overlap }
    })
    .filter(({ overlap }) => overlap > 0)
    .sort((a, b) => b.overlap - a.overlap || b.candidate.data.publishedAt.getTime() - a.candidate.data.publishedAt.getTime())
    .slice(0, limit)
    .map(({ candidate }) => candidate)
}
