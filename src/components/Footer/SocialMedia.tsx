import { ActionIcon, rem } from "@mantine/core";
import { TablerIconsProps } from "@tabler/icons-react";

interface Media {
    link: string;
    icon: React.ElementType<TablerIconsProps>;
}

export default function SocialMedia({ link, icon }: Media) {
    const Icon = icon;
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
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
}