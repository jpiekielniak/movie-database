import React from 'react';
import { Container, Grid, Image } from '@mantine/core';
import SignInButton from './SignInButton';
import styles from "./styles/header.module.css";

const Header: React.FC = React.memo(() => {
  return (
    <Container className={styles.container}>
      <Grid className={styles.grid}>
        <Grid.Col className={styles.gridColStart}>
          <Image src="movie_club.png" alt="Movie Logo" width={120} height={50} />
        </Grid.Col>
        <Grid.Col className={styles.gridColEnd}>
          <SignInButton />
        </Grid.Col>
      </Grid>
    </Container>
  );
});

export default Header;