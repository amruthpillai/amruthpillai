import Ingredients from "components/Header/Ingredients";
import PhotoWall from "components/Header/PhotoWall";
import Profiles from "components/Header/Profiles";
import NoSSR from "components/NoSSR";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import Image from "next/image";

const Header: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div id="header" className="h-screen grid place-items-center place-content-center gap-4">
      {/* Photo Wall */}
      <NoSSR>
        {/* <PhotoWall size={width > Breakpoints.sm ? 384 : 256} /> */}
      </NoSSR>

      {/* Logo */}
      <Image src="/images/logo.png" width={485} height={128} alt="Owali Ullah Shawon" priority />

      {/* Text Version */}
      <h1 className="sr-only">
        Owali Ullah Shawon - Resume on the Web
        <br />
        Developer, Photographer, Writer
        <br />
        Dhaka, Bangladesh
      </h1>

      {/* Ingredients */}
      <Ingredients />

      {/* Social Profiles */}
      <Profiles />
    </div>
  );
};

export default Header;
