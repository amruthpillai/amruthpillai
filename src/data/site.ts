import type { BlogPosting, Person, WebSite, WithContext } from "schema-dts"

import type { BlogPost } from "@/collections/blog"
import { getBlogPostSlug } from "@/utils/url"

const SITE_URL = new URL("https://beta.amruthpillai.com")

export const site = {
  name: "Amruth Pillai",
  email: "hello@amruthpillai.com",
  tagline: "Designer · Developer · Photographer · Writer",
  description: "Everyone needs their own little cozy corner on the interwebs, and this is mine.",
  url: SITE_URL,
  locale: "en",
  keywords: ["amruth pillai", "open source", "software engineer", "frontend developer", "berlin", "bengaluru"],
} as const

export const resume = {
  filename: "resume.pdf",
  mimeType: "application/pdf",
  size: 1_808_787, // in bytes
  url: "https://drive.google.com/file/d/1_iCmMi8Vok7JGOZu4RLN_cgbdKjdrCmy/view?usp=drive_link",
} as const

export const contactForm = {
  endpoint: "https://submit-form.com/LVr3mgSu",
  redirectPath: "/?sent=true#contact",
} as const

interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: "blog", href: "/blog" },
  { label: "contact", href: "/#contact" },
]

interface SocialLink {
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { label: "email", href: `mailto:${site.email}` },
  { label: "github", href: "https://github.com/amruthpillai" },
  { label: "linkedin", href: "https://linkedin.com/in/amruthpillai" },
  { label: "x", href: "https://x.com/KingOKings" },
] as const

const identityLinks = socialLinks.filter((link) => link.href.startsWith("http")).map((link) => link.href)

const personEntity: Person = {
  "@type": "Person",
  name: site.name,
  email: site.email,
  url: site.url.toString(),
  jobTitle: "Senior Frontend Engineer",
  sameAs: identityLinks,
}

export const personSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  ...personEntity,
} as const

export const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  description: site.description,
  inLanguage: site.locale,
  keywords: site.keywords,
  url: site.url.toString(),
  author: personEntity,
  sameAs: identityLinks,
} as const

export function getBlogPostSchema(post: BlogPost): WithContext<BlogPosting> {
  const canonicalUrl = new URL(`/blog/${getBlogPostSlug(post)}/`, site.url).toString()
  const datePublished = post.data.publishedAt.toISOString()
  const featuredImage = post.data.featuredImage
  const image = featuredImage ? new URL(featuredImage.src, site.url).toString() : undefined

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    image,
    headline: post.data.title,
    description: post.data.description,
    author: personEntity,
    publisher: personEntity,
    datePublished,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    inLanguage: site.locale,
    keywords: site.keywords,
  } as const
}
