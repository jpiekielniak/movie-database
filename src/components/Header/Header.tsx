import { Container, Grid, Image } from '@mantine/core';
import LoginButton from './SignInButton';
import styles from "./styles/header.module.css";

const Header = () => {
  return (
    <Container className={styles.container}>
      <Grid className={styles.grid}>
        <Grid.Col className={styles.gridColStart}>
          <Image src="movie_club.png" alt="Movie Logo" width={120} height={50} />
        </Grid.Col>
        <Grid.Col className={styles.gridColEnd}>
          <LoginButton />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Header;