import { Container, Text, Group } from "@mantine/core";
import { IconCopyright } from "@tabler/icons-react";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  const footerLineStyle = {
    borderTop: "1px solid black",
    backgroundColor: "#6a85b6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: "4px 0",
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={footerLineStyle}>
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
