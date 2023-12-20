import React, {useState} from 'react';
import {TextInput, TextInputProps, ActionIcon, useMantineTheme} from '@mantine/core';
import {IconSearch, IconArrowRight} from '@tabler/icons-react';
import styles from "./styles/searchBar.module.css";

interface SearchBarProps extends TextInputProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
    const theme = useMantineTheme();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (value: string) => {
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <TextInput
            className={styles.container}
            value={searchTerm}
            onChange={(event) => handleSearch(event.currentTarget.value)}
            radius="xl"
            size="lg"
            placeholder="Search movies"
            rightSectionWidth={42}
            leftSection={<IconSearch className={styles.left} stroke={1.5}/>}
            rightSection={
                <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                    <IconArrowRight className={styles.right} stroke={1.5}/>
                </ActionIcon>
            }
        />
    );
}

export default SearchBar;
