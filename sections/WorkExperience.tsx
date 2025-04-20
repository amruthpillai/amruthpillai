import Tippy from "@tippyjs/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const DISPLAY_COUNT = 3;

type WorkExperience = {
  id: number;
  logo: string;
  name: string;
  period: { start: string; end: string };
  position: string;
  location: string;
  summary: string;
  keyFocus: string[];
};

const workExperiences: WorkExperience[] = [
  {
    id: 4,
    logo: "/images/work-experience/softic.png",
    name: "SOFTIC",
    period: { start: "Jul 22", end: "Present" },
    position: "Software Engineer",
    location: "Dhaka, Bangladesh",
    summary: `Engineered a real‑time chat support application using Express.js, SocketIO, and MongoDB, enabling seamless user communication and improving platform engagement.

Developed and maintained a secure transaction system supporting deposits, withdrawals, and account transfers across multiple currencies, ensuring data integrity and compliance with financial standards.

Built a multi‑currency rate management service, integrating real‑time exchange rate updates and ensuring accurate financial calculations across transactions.

Designed and deployed a notification service using GraphQL subscriptions, providing instant updates across all user activities and system events.

Implemented an authentication and authorization service with role‑based access control, securing endpoints and sensitive user data.

Architected and optimized a wallet service using PostgreSQL and Prisma, ensuring accurate balance tracking and transaction histories.

Collaborated closely with product and design teams on SRS preparation, database design, and backend system architecture for solutions.

Utilized NestJS, PostgreSQL, MongoDB, Kafka, and Redis to develop and optimize scalable backend services.`,
    keyFocus: [
      "Node.js",
      "Express.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Kafka",
      "Redis",
      "GraphQL",
      "SocketIO",
      "Prisma",
      "zod",
    ],
  },
  {
    id: 3,
    logo: "/images/work-experience/ois.webp",
    name: "SOFTIC",
    period: { start: "December 2022", end: "April 2023" },
    position: "Software Engineer",
    location: "Dhaka, Bangladesh",
    summary: `Collaborated as a mobile developer on a team building a NativeScript Vue mobile app, enabling users to request personalized video messages
from their favorite celebrities, with features for celebrities to record and upload videos for users.`,
    keyFocus: ["Node.js", "Express.js", "mySQL", "SocketIO", "Prisma", "joi"],
  },
  {
    id: 2,
    logo: "/images/work-experience/oplly.png",
    name: "OPLLY",
    period: { start: "December 2022", end: "April 2023" },
    position: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    summary: `Collaborated as a mobile developer on a team building a NativeScript Vue mobile app, enabling users to request personalized video messages
from their favorite celebrities, with features for celebrities to record and upload videos for users.`,
    keyFocus: [],
  },
  {
    id: 1,
    logo: "/images/work-experience/intigsol.png",
    name: "INTIGSOL",
    period: { start: "Jul 21", end: "April 2022" },
    position: "Software Developer & Software Developer (Trainee)",
    location: "Dhaka, Bangladesh",
    summary: `
    • Worked on developing an e‑commerce platform utilizing React.js for the front end, Express for the back end, MySQL for database management, and Prisma for seamless database integration. 

    • Designed and developed static websites using HTML, CSS, JavaScript, and Reactjs, ensuring responsive layouts and optimal user experiences across devices. 

    • Created user‑friendly and visually appealing UI designs using WordPress Elementor, customizing templates to meet client specifications and enhancing overall website functionality.`,
    keyFocus: ["html", "css", "javascript", "reactjs", "bootstrap", "wordpress", "elementor"],
  },
];

type Props = {
  data: WorkExperience;
  isFirst: boolean;
  isLast: boolean;
};

const WorkExperience: React.FC<Props> = ({ data, isFirst, isLast }) => (
  <div className="flex group">
    <div className={clsx("ml-1 w-1 flex-shrink-0 bg-neutral-500/25", { "rounded-t": isFirst, "rounded-b": isLast })} />

    <div className="-ml-2 mt-8 flex-shrink-0 relative w-3 h-3 rounded-full shadow-lg bg-teal-500/80 dark:bg-white/80 group-hover:w-6 transition-[width]" />

    <div className="mt-5 ml-8 grid gap-2 pb-2">
      <div className="relative w-[100px] h-10">
        <Image src={data.logo} alt={data.name} width={100} height={40} className="object-contain" />
      </div>

      <div>
        <h3>
          <span className="text-base font-bold">{data.name}</span>{" "}
          <span className="text-xs">
            ({data.period.start} - {data.period.end})
          </span>
        </h3>
        <h4>{data.position}</h4>
      </div>

      <h5 className="my-1 flex gap-2 items-center text-xs">
        <FaLocationArrow />
        <span>{data.location}</span>
      </h5>

      <p className="prose prose-sm prose-neutral dark:prose-invert">{data.summary}</p>

      <p className="text-xs leading-relaxed prose-sm prose-neutral dark:prose-invert">
        <strong>Key Focus:</strong> {data.keyFocus.join(", ")}
      </p>
    </div>
  </div>
);

const WorkExperienceTimeline = () => {
  const [showMore, setShowMore] = useState(workExperiences.length > DISPLAY_COUNT ? false : true);

  return (
    <div id={Section.WorkExperience}>
      {getSectionHeading(Section.WorkExperience)}

      <div className="flex flex-col">
        {workExperiences
          .filter((_, index) => (showMore ? true : index < DISPLAY_COUNT))
          .map((data, index) => (
            <WorkExperience key={data.id} data={data} isFirst={index === 0} isLast={index === 2} />
          ))}
      </div>

      {!showMore && (
        <Tippy content={`Show ${workExperiences.length - DISPLAY_COUNT} More`} placement="right">
          <div className="inline-block ml-8 p-2 cursor-pointer" onClick={() => setShowMore(true)}>
            <MdMoreHoriz size="24" />
          </div>
        </Tippy>
      )}
    </div>
  );
};

export default WorkExperienceTimeline;
