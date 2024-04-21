import { NextResponse } from 'next/server';

const BASEURL = `https://api.spotify.com/v1`;

const token = sessionStorage.getItem('token');

export const getUserTracks = async () => {
  let limit = 50;

  try {
    const response = await fetch(`${BASEURL}/me/tracks?limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const GET = async () => {
  const data = await getUserTracks();

  return NextResponse.json(
    data.items.map?.((item) => {
      return {
        id: item.track.id,
        name: item.track.name,
        artist: item.track.artists[0].name,
        album: item.track.album.name,
        image: item.track.album.images[0].url,
      };
    })
  );
};
