import { NextRequest, NextResponse } from 'next/server';
import { getToken } from '../../../lib/authorize';

export const GET = async (req: NextRequest) => {
  const code = req.nextUrl.searchParams.get('code');

  const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!code || !spotifyClientSecret) {
    throw new Error('Missing required parameters');
  }

  await getToken({
    code: code,
    spotifyClientSecret: spotifyClientSecret,
  });

  return NextResponse.json({ success: true });
};
