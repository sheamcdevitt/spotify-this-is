import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Spotify from 'next-auth/providers/spotify';

export const authOptions: NextAuthOptions = {
  providers: [
    Spotify({
      clientId: process.env.SPOTIFY_CLIENT!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
