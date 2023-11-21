import { Container, Grid, Image } from '@mantine/core';
import LoginButton from './LoginButton';

const Header = () => {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Grid style={{ width: '100%' }}>
        <Grid.Col style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Image src="movie_club.png" alt="Movie Logo" width={120} height={50} />
        </Grid.Col>
        <Grid.Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <LoginButton />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Header;
