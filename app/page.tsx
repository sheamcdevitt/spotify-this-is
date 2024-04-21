import { Box, Button, Typography } from '@mui/material';
import { getServerSession } from 'next-auth';
import NextLink from 'next/link';

import { AuthButton } from '../components/AuthButton';

export default async function Home() {
  const session = await getServerSession();

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant='h4' component='h1' gutterBottom>
        Home Page eg
      </Typography>
      <Box sx={{ maxWidth: 'sm' }}>
        <Button variant='contained' component={NextLink} href='/about'>
          Go to the about page
        </Button>
        <AuthButton />
      </Box>
    </Box>
  );
}
