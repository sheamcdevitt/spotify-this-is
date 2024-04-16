import { Box, Button, Typography } from '@mui/material';

import NextLink from 'next/link';

export default function Home() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant='h4' component='h1' gutterBottom>
        Home Page eg
      </Typography>
      <Box sx={{ maxWidth: 'sm' }}>
        <Button variant='contained' component={NextLink} href='/about'>
          Go to the about page
        </Button>
      </Box>
    </Box>
  );
}
