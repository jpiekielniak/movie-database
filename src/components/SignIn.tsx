import { Button } from '@mantine/core';

export default function SignIn() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: 'blue', to: 'rgba(111, 0, 171, 1)', deg: 269 }}
      style={{ position: 'absolute', top: '20px', right: '20px', fontWeight: 'bold' }}
    >
      Zaloguj się 
    </Button>
  );
};
