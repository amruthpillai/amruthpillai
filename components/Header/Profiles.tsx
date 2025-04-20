import Tippy from "@tippyjs/react";
import clsx from "clsx";
import links from "data/links";
import type { IconType } from "react-icons";
import { FaDev, FaFacebookF, FaGithubAlt, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

type Profile = {
  title: string;
  icon: IconType;
  link: string;
  className: string;
};

const profiles: Profile[] = [
  {
    title: "LinkedIn",
    icon: FaLinkedinIn,
    link: links.linkedin,
    className: "bg-[#2867b2]",
  },
  {
    title: "GitHub",
    icon: FaGithubAlt,
    link: links.github,
    className: "bg-[#211f1f]",
  },
  {
    title: "LeetCode",
    icon: SiLeetcode,
    link: links.leetcode,
    className: "bg-[#3b5998]",
  },
  {
    title: "DEV Community",
    icon: FaDev,
    link: links.dev,
    className: "bg-[#0a0a0a]",
  },
  {
    title: "Instagram",
    icon: FaInstagram,
    link: links.instagram,
    className: "bg-[#e1306c]",
  },
  {
    title: "Twitter",
    icon: FaTwitter,
    link: links.twitter,
    className: "bg-[#1da1f2]",
  },
  {
    title: "Facebook",
    icon: FaFacebookF,
    link: links.facebook,
    className: "bg-[#3b5998]",
  },
];

const Profiles: React.FC = () => (
  <div className="h-[22px] mt-5 flex gap-8">
    {profiles.map(({ title, link, icon: Icon, className }, index) => (
      <Tippy key={title} content={title} placement="bottom">
        <span
          className={clsx("p-1 text-sm text-white rounded-full", "animate__animated animate__fadeIn", className)}
          style={{ animationDelay: `${index * 0.5 + 6}s` }}
        >
          <a href={link} target="_blank" rel="noreferrer">
            <Icon />
            <span className="sr-only">{title}</span>
          </a>
        </span>
      </Tippy>
    ))}
  </div>
);

export default Profiles;
