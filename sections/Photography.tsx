import Button from "components/Button";
import ImageLink from "components/ImageLink";
import links from "data/links";
import { FaInstagram } from "react-icons/fa";
import { InstagramMedia, Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

type Props = {
  instagramMedia: InstagramMedia[];
};

const Photography: React.FC<Props> = ({ instagramMedia }) => (
  <div id={Section.Photography}>
    {getSectionHeading(Section.Photography)}

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {instagramMedia
        .filter((media) => media.media_type === "IMAGE")
        .slice(0, 10)
        .map((media) => {
          // CDN Subdomain Replacement Hack for whitelisted URLs in next/image
          // (https://github.com/vercel/next.js/discussions/18429#discussioncomment-989303)
          const src = media.media_url.replace(/^[^.]*/, "https://scontent");

          return (
            <ImageLink
              src={src}
              key={media.id}
              href={media.permalink}
              imageClassName="aspect-square"
              alt={`${media.id} - Owali Ullah Shawon`}
              dimensions={{ width: 512, height: 512 }}
            />
          );
        })}
    </div>

    <Button icon={FaInstagram} className="mt-8" onClick={() => openURLInNewTab(links.instagram)}>
      Photos on Instagram
    </Button>
  </div>
);

export default Photography;
