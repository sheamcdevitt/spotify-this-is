const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const redirectUri = 'http://localhost:4040/callback';

function generateRandomString(length: number): string {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier: string): Promise<string> {
  function base64encode(string: Uint8Array): string {
    return btoa(String.fromCharCode.apply(null, Array.from(string)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);

  return base64encode(new Uint8Array(digest));
}

const codeVerifier: string = generateRandomString(128);

let urlParams = new URLSearchParams();

if (typeof window !== 'undefined') {
  urlParams = new URLSearchParams(window.location.search);
}

export const authorize = async () => {
  generateCodeChallenge(codeVerifier).then((codeChallenge) => {
    const state: string = generateRandomString(16);
    const scope: string =
      'user-read-private user-read-email streaming user-read-playback-state user-modify-playback-state user-library-read';

    sessionStorage.setItem('code_verifier', codeVerifier);

    const args = new URLSearchParams({
      response_type: 'code',
      client_id: SPOTIFY_CLIENT_ID || '',
      scope: scope,
      redirect_uri: redirectUri,
      state: state,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
    });

    window.location.href = 'https://accounts.spotify.com/authorize?' + args;
  });
};

type GetTokenOptions = {
  code: string;
  spotifyClientSecret: string;
};

export const getToken = async (options: GetTokenOptions) => {
  if (typeof window === 'undefined') {
    return;
  }

  const codeVerifier = sessionStorage.getItem('code_verifier');
  const body = new URLSearchParams({
    grant_type: 'authorization_code' || '',
    code: options.code || '',
    redirect_uri: redirectUri || '',
    client_id: SPOTIFY_CLIENT_ID || '',
    code_verifier: codeVerifier || '',
  });

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          btoa(`${SPOTIFY_CLIENT_ID}:${options.spotifyClientSecret}`),
      },
      body: body,
    });

    return response.json();
  } catch (error) {
    window.location.href = '/';
  }
};

export const refreshSpotifyToken = async (refresh_token: string) => {
  const body = new URLSearchParams({
    grant_type: 'refresh_token' || '',
    refresh_token: refresh_token,
    client_id: SPOTIFY_CLIENT_ID || '',
  });
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    });

    return response.json();
  } catch (err) {
    console.log(err);
  }
};
