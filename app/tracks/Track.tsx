import { Box, Card, CardContent, Typography } from '@mui/material';
import NextImage from 'next/image';

export type TrackProps = {
  id: string;
  name: string;
  artist: string;
  album: string;
  image: string;
};

export const Track = (props: TrackProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        marginBottom: 4,
        transition: 'transform 0.2s',
        maxWidth: 500,
        '&:hover': {
          transform: 'scale(1.05)',
          cursor: 'pointer',
        },
      }}
      key={props.id}
    >
      <NextImage
        style={{ borderRadius: 4, flexShrink: 0 }}
        src={props.image}
        alt={props.name}
        width={100}
        height={100}
      />
      <Box flex='1 0 auto'>
        <CardContent>
          <Typography component='h5' variant='h5' noWrap>
            {props.name}
          </Typography>
          <Typography variant='subtitle1' color='white'>
            {props.artist} - {props.album}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
