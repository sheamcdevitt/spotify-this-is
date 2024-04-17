import { Box, Button, Typography } from '@mui/material';
import NextLink from 'next/link';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { SignInButton } from '@/components/SignInButton';

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant='h4' component='h1' gutterBottom>
        Home Page eg
      </Typography>
      <Box sx={{ maxWidth: 'sm' }}>
        <Button variant='contained' component={NextLink} href='/about'>
          Go to the about page
        </Button>
        <SignInButton />
      </Box>
    </Box>
  );
}
