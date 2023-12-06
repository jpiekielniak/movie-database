import { Container, Title, Text, Group } from "@mantine/core";
import { Illustration } from "./ilustration/Ilustration";
import styles from "./styles/notFound.module.css";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <Container className={styles.container}>
      <div className={styles.inner}>
        <Illustration className={styles.image} />
        <div className={styles.content}>
          <Title className={styles.title}>Nic tu nie ma do oglądania</Title>
          <Text c="white" size="lg" ta="center" className={styles.description}>
            <p>
              Strona, którą próbujesz otworzyć, nie istnieje. Może nastąpił błąd
              w adresie, albo strona została przeniesiona pod inny URL. Jeśli
              import
            </p>
          </Text>
          <Group justify="center">
          <Link to="/" className={styles.link}>
            Wróć do strony głównej
          </Link>
          </Group>
        </div>
      </div>
    </Container>
  );
}
