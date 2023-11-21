import { Container, Text, Group, rem, ActionIcon } from "@mantine/core";
import {
  IconCopyright,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail
} from "@tabler/icons-react";

function Footer() {
  const footerLineStyle = {
    borderTop: "1px solid black",
    backgroundColor: "#6A00E3",
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
            <Text size="sm" w={600}>
              <span>
                <IconCopyright />
                2023 Jakub Piekielniak - Programowanie reaktywne II - movie
                database
              </span>
            </Text>
            <ActionIcon size="lg" color="black" variant="subtle">
              <IconBrandLinkedin
                style={{ width: rem(25), height: rem(25) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="black" variant="subtle">
              <IconBrandGithub
                style={{ width: rem(25), height: rem(25) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="black" variant="subtle">
                <IconMail
                    style={{ width: rem(25), height: rem(25) }}
                    stroke={1.5}
                />
                </ActionIcon>
          </Group>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
