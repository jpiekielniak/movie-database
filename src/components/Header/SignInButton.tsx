import { Button } from '@mantine/core';
import styles from "./styles/signInButton.module.css"
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const handleSignInClick = () => navigate('/sign-in');

  return (
    <Button
      variant="gradient"
      gradient={{ from: 'rgba(211, 217, 232, 1)', to: 'blue' }}
      style={{ position:"absolute", right:"10px", top:"10px"}}
      className={styles.btn}
      onClick={handleSignInClick} 
    >
      Zaloguj się 
    </Button>
  );
};