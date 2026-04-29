import getReadingTime from "reading-time"

import type { BlogPost } from "@/collections/blog"

import { formatDate } from "./date"

export function getPostMetadata(post: BlogPost) {
  const body = post.body?.toString() ?? ""
  const { text: readingTime } = getReadingTime(body)

  return {
    date: post.data.publishedAt.toISOString(),
    formattedDate: formatDate(post.data.publishedAt),
    readingTime,
  }
}
