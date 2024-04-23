import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Track } from './Track';
import { Grid } from '@mui/material';

export default async function Tracks() {
  const tracks = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tracks`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4' sx={{ mb: 2, fontWeight: 'bold' }}>
          Your liked tracks
        </Typography>
        <Grid container spacing={2}>
          {tracks.map((track) => (
            <Grid item xs={12} sm={6}>
              <Track key={track.id} {...track} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
