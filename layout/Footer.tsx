import { Box, Tooltip, Link, Typography } from '@mui/material';
import { X, Email, Coffee } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box
      p={{
        xs: '12px 0px',
        sm: '24px 3rem',
        md: '24px 5rem',
        lg: '24px 10rem',
      }}
      flexDirection={{ xs: 'column', sm: 'row' }}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        margin: '64px auto 0',
        borderTop: '1px solid #eaeaea',
        blur: '10px',
      }}
    >
      <Typography variant='h4' align='center'>
        {'© 2024 Shéa McDevitt'}
      </Typography>
      <Box
        justifyContent={{ xs: 'center', lg: 'space-between' }}
        sx={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Tooltip title='Buy me a coffee' arrow dir='up' placement='top'>
          <Link
            href='https://open.spotify.com/user/sheamcdevitt?si=ca55687c92f64540'
            target='_blank'
            rel='noopener noreferrer'
            color={'#1db954 '}
          >
            <Typography>My Spotify Account</Typography>
          </Link>
        </Tooltip>
      </Box>
    </Box>
  );
};
