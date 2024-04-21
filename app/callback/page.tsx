'use client';

import useRefreshToken from '../../hooks/useRefreshToken';
import { useSearchParams } from 'next/navigation';

export default function CallbackPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  useRefreshToken(code as string);

  return (
    <div>
      <h1>Callback Page</h1>
      <h6>Code: {code}</h6>
    </div>
  );
}
