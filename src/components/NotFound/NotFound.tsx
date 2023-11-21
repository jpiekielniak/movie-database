import { Container, Title, Text, Button, Group } from "@mantine/core";
import { Illustration } from "../NotFound/Ilustration/Ilustration";
import "../../styles/notFound.css";
import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();
    const handleRedirect = () => navigate('/');

  return (
    <Container className="root">
      <div className="inner">
        <Illustration className="image" />
        <div className="content">
          <Title className="title">Nic tu nie ma do oglądania</Title>
          <Text c="white" size="lg" ta="center" className="description">
            <p>
              Strona, którą próbujesz otworzyć, nie istnieje. Może nastąpił błąd
              w adresie, albo strona została przeniesiona pod inny URL. Jeśli
              uważasz, że to błąd, skontaktuj się z pomocą techniczną.
            </p>
          </Text>
          <Group justify="center">
            <Button 
            size="md"
            onClick={handleRedirect}
            >Wróć do strony głównej</Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}
