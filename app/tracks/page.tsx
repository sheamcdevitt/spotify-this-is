'use client';

import sdk from '@lib/spotify-instance';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Track, TrackProps } from './Track';

export default function Tracks() {
  const [tracks, setTracks] = React.useState<TrackProps[]>([]);

  React.useEffect(() => {
    (async () => {
      const tracks = await sdk.currentUser.tracks.savedTracks();
      console.log(tracks);

      setTracks(
        tracks?.items?.map((item) => {
          const track = item.track;
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            image: track.album.images[0].url,
          };
        })
      );
    })();
  }, [sdk]);

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
