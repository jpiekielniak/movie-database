import { Button } from '@mantine/core';
import "../styles/signIn.css"

export default function SignIn() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: 'rgba(211, 217, 232, 1)', to: 'blue' }}
      style={{ position: 'absolute', top: '20px', right: '20px' }}  
      className='btn'    
    >
      Zaloguj się 
    </Button>
  );
};

