import { Container, Group, ActionIcon, rem, Text } from '@mantine/core';
import { IconCopyright, IconBrandLinkedin } from '@tabler/icons-react';
import '../styles/FooterSocial.module.css';

function Footer() {
    return (
        <div className="footer">
            <Container className="inner">
                <Group gap={0} className="links" justify="flex-end" wrap="nowrap">
                    <Text c="black" size="md">
                        <IconCopyright textAnchor=''/>  
                         2023 Jakub Piekielniak - Programowanie reaktywne II - movie database
                    </Text>
                    <ActionIcon size="lg" color="black" variant="subtle">
                        <IconBrandLinkedin style={{ width: rem(25), height: rem(25) }}  stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}

export default Footer;
