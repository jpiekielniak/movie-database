import { ActionIcon, rem } from "@mantine/core";
import { useSocialMediaLinks } from "./hooks/useSocialMediaLinks";

export default function SocialMediaIcons() {
  const socialMediaLinks = useSocialMediaLinks();

  return (
    <div>
      {socialMediaLinks.map((item, index) => {
        const Icon = item.icon;
        return (
          <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
            <ActionIcon
              size="lg"
              color="black"
              variant="subtle"
              style={{ width: rem(25), height: rem(25) }}
            >
              <Icon stroke={1.5} />
            </ActionIcon>
          </a>
        );
      })}
    </div>
  );
}
