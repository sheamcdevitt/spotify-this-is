'use client';

import { Box, Button, Typography } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import NextLink from 'next/link';

const Unauthenticated = () => (
  <Box sx={{ my: 4 }}>
    <Typography variant='h4' component='h1' gutterBottom>
      Sign in with Spotify to continue
    </Typography>
    <Box sx={{ maxWidth: 'sm' }}>
      <Button variant='contained' onClick={() => signIn('spotify')}>
        Sign in
      </Button>
    </Box>
  </Box>
);

export default function Home() {
  const session = useSession();

  if (!session || session.status !== 'authenticated') {
    return <Unauthenticated />;
  }

  const user = session.data.user;
  const name = user?.name;

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant='h4' gutterBottom mb={4}>
        Welcome, {name}
      </Typography>
      <Box
        display='flex'
        flexDirection={{
          xs: 'column',
          sm: 'row',
        }}
        sx={{ maxWidth: 'sm', gap: 2 }}
      >
        <Button variant='contained' component={NextLink} href='/tracks'>
          View your liked tracks
        </Button>
        <Button variant='contained' onClick={() => signOut()}>
          Sign out
        </Button>
      </Box>
    </Box>
  );
}
