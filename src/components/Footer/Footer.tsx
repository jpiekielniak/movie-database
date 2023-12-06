import { Container, Text, Group } from "@mantine/core";
import { IconCopyright } from "@tabler/icons-react";
import SocialMediaIcons from "./SocialMediaIcons";
import styles from "./styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <Container>
          <Group align="center">
            <Text size="sm" fw={700} w={600}>
              <span>
                <IconCopyright />
                2023 Jakub Piekielniak - Programowanie reaktywne II - movie
                database
              </span>
            </Text>
            <SocialMediaIcons />
          </Group>
        </Container>
      </div>
    </div>
  );
}
