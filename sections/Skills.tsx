import Image from "next/image";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";
import skills from "data/skills";

//   {
//     id: 1,
//     icon: "/images/skills/web.png",
//     name: "Web Design & Development",
//     technologies: ["HTML", "CSS", "JavaScript", "TypeScript"],
//   },
//   {
//     id: 2,
//     icon: "/images/skills/angular.png",
//     name: "Frontend Javascript Frameworks",
//     technologies: ["Angular", "React", "Vue.js", "Svelte"],
//   },
//   {
//     id: 3,
//     icon: "/images/skills/nodejs.png",
//     name: "Backend Javascript Frameworks",
//     technologies: ["Node.js", "Express.js", "NestJS"],
//   },
//   {
//     id: 4,
//     icon: "/images/skills/flutter.png",
//     name: "Cross Platform App Development",
//     technologies: ["Dart", "Flutter", "Firebase"],
//   },
//   {
//     id: 5,
//     icon: "/images/skills/python.png",
//     name: "Scripting Frameworks",
//     technologies: ["Python", "Rust", "Selenium", "Puppeteer"],
//   },
//   {
//     id: 6,
//     icon: "/images/skills/database.png",
//     name: "Database Management System",
//     technologies: ["Postgres", "TypeORM", "MongoDB", "Mongoose"],
//   },
//   {
//     id: 7,
//     icon: "/images/skills/android.png",
//     name: "Android App Development",
//     technologies: ["Android Studio", "Java", "Kotlin", "XML"],
//   },
//   {
//     id: 8,
//     icon: "/images/skills/sketch.png",
//     name: "UI/UX Design",
//     technologies: ["Adobe XD", "Figma", "Sketch"],
//   },
//   {
//     id: 9,
//     icon: "/images/skills/tensorflow.png",
//     name: "Data Processing & Machine Learning",
//     technologies: ["R", "scikit-learn", "TensorFlow", "Keras"],
//   },
//   {
//     id: 10,
//     icon: "/images/skills/seo.png",
//     name: "Search Engine Optimization",
//     technologies: ["PageRank", "Backlinks", "Google Analytics"],
//   },
//   {
//     id: 11,
//     icon: "/images/skills/photography.png",
//     name: "Photography & Cinematography",
//     technologies: ["Adobe Photoshop", "Adobe Lightroom"],
//   },
//   {
//     id: 12,
//     icon: "/images/skills/fcpx.png",
//     name: "Photo & Video Post-Processing",
//     technologies: ["Adobe After Effects", "Final Cut Pro X"],
//   },
// ];

const Skills = () => (
  <div id={Section.Skills}>
    {getSectionHeading(Section.Skills)}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="px-4 py-2 border border-neutral-900/10 dark:border-neutral-50/10 hover:border-neutral-900/30 dark:hover:border-neutral-50/30 rounded flex items-center gap-4 transition-colors duration-700 hover:duration-100"
        >
          <div className="w-5 h-5">
            <Image src={skill.icon} width={20} height={20} alt={skill.name} className="object-contain" />
          </div>

          <div className="min-w-0 flex-1 flex flex-col">
            <strong className="truncate">{skill.name}</strong>
            <small className="truncate">({skill.technologies.join(", ")})</small>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
