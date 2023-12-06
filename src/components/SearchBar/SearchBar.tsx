import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import styles from "./styles/searchBar.module.css";

export function SearchBar(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      radius="xl"
      size="lg"
      placeholder="Search movies"
      rightSectionWidth={42}
      leftSection={<IconSearch className={styles.left} stroke={1.5} />}
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          <IconArrowRight className={styles.right} stroke={1.5} />
        </ActionIcon>
      }
      {...props}
    />
  );
}