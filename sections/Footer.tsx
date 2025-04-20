import { format } from "date-fns";

const Footer = () => (
  <div id="footer" className="mb-16 text-xs leading-loose opacity-30">
    Inspired from <a href="https://github.com/AmruthPillai/ResumeOnTheWeb">ResumeOnTheWeb</a>
    <br />
    Copyright {format(Date.now(), "yyyy")} Owali Ullah Shawon.
  </div>
);

export default Footer;
