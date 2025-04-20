import Tippy from "@tippyjs/react";
import { ThemeContext } from "contexts/ThemeProvider";
import { sectionsArray } from "data/sections";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import Image from "next/image";
import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { animateScroll, scroller } from "react-scroll";
import { Section } from "types/Sections";

const Navigation = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width > Breakpoints.lg;

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const goToSection = (section: Section) => scroller.scrollTo(section, { duration: 500, smooth: true });

  if (!isDesktop) {
    return (
      <div className="fixed inset-x-0 top-0 px-3 py-5 w-screen text-neutral-800 dark:text-neutral-200 flex items-center justify-between">
        <Tippy content={<small>Go to Top</small>} placement="right">
          <div
            onClick={animateScroll.scrollToTop}
            className="p-1 flex cursor-pointer grayscale hover:grayscale-0 transition-[filter]"
          >
            <Image src="/images/icon.png" alt="Owali Ullah Shawon" width={32} height={32} />
          </div>
        </Tippy>

        <Tippy content={<small>Toggle Theme</small>} placement="right">
          <div onClick={toggleTheme} className="p-1 cursor-pointer hover:text-teal-500 transition-colors">
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </div>
        </Tippy>
      </div>
    );
  }

  return (
    <div className="fixed inset-y-0 w-16 py-5 h-screen text-neutral-800 dark:text-neutral-200 flex flex-col items-center justify-between">
      <Tippy content={<small>Go to Top</small>} placement="right">
        <div
          onClick={animateScroll.scrollToTop}
          className="p-1 flex cursor-pointer grayscale hover:grayscale-0 transition-[filter]"
        >
          <Image src="/images/icon.png" alt="Owali Ullah Shawon" width={32} height={32} />
        </div>
      </Tippy>

      <div className="flex-1 w-7 overflow-hidden flex justify-start items-center group">
        <div className="flex w-full transition-[margin] ml-2 group-hover:-ml-7">
          <FiMenu />
        </div>

        <div className="flex flex-col ml-2">
          {sectionsArray.map(({ id, icon: Icon, title }) => (
            <Tippy key={id} content={<small>{title}</small>} placement="right">
              <div className="cursor-pointer py-3" onClick={() => goToSection(id)}>
                <Icon />
              </div>
            </Tippy>
          ))}
        </div>
      </div>

      <Tippy content={<small>Toggle Theme</small>} placement="right">
        <div onClick={toggleTheme} className="p-1 cursor-pointer hover:text-teal-500 transition-colors">
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </div>
      </Tippy>
    </div>
  );
};

export default Navigation;
