'use client';

import { useSearchParams, redirect } from 'next/navigation';

export default async function CallbackPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  if (code) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/refresh-token?code=${code}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.ok) {
      redirect('/tracks');
    }
  }

  return (
    <div>
      <h1>Callback Page</h1>
      <h6>Code: {code}</h6>
    </div>
  );
}
