import { useState } from 'react';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import styles from "./styles/searchBar.module.css";

interface SearchBarProps extends TextInputProps {
  onSearch: (searchTerm: string) => void;
}

export function SearchBar({ onSearch, ...props }: SearchBarProps) {
  const theme = useMantineTheme();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <TextInput
      value={searchTerm}
      onChange={(event) => handleSearch(event.currentTarget.value)}
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
    />
  );
}
