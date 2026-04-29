import { blogCollection } from "./collections/blog"
import { educationCollection } from "./collections/education"
import { experienceCollection } from "./collections/experience"
import { languagesCollection } from "./collections/languages"
import { projectsCollection } from "./collections/projects"

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  experience: experienceCollection,
  education: educationCollection,
  languages: languagesCollection,
}
