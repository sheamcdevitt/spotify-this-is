'use client';

import { Box, Button } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';

export const SignInButton = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Button disabled>Loading...</Button>;
  } else if (status == 'authenticated') {
    console.log(session);
    return (
      <Box>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </Box>
    );
  }

  return (
    <Box>
      <Button onClick={() => signIn()}>Sign In</Button>
    </Box>
  );
};
