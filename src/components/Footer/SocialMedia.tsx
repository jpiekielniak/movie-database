import { ActionIcon } from "@mantine/core";
import styles from "./styles/socialMedia.module.css";
import Media from "./types/Media";

export default function SocialMedia({ link, icon }: Media) {
    const Icon = icon;
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <ActionIcon
              size="lg"
              color="black"
              variant="subtle"
              className={styles.icon}
            >
              <Icon stroke={1.5} />
            </ActionIcon>
          </a>
    );
}