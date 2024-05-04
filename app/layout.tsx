import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme/theme';
import Layout from '../layout/Layout';
import AuthSessionProvider from '@components/AuthSessionProvider';
import { getServerSession } from 'next-auth';
import authOptions from './api/auth/[...nextauth]/authOptions';

export default async function RootLayout(props: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <AuthSessionProvider session={session}>
        <body>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Layout>{props.children}</Layout>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </AuthSessionProvider>
    </html>
  );
}
