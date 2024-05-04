import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Footer } from './Footer';
import styles from './Layout.module.css';
import Link from 'next/link';
import { colors } from '../theme/colors';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      className={styles.container}
      sx={{
        backgroundColor: colors.background,
      }}
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <AppBar position='static' sx={{ backgroundColor: colors.black }}>
        <Toolbar>
          <Link
            href='/'
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            <Typography variant='h6' component='div'>
              spotify-this-is
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Container
        className={styles.content}
        sx={{
          backgroundColor: colors.background,
        }}
      >
        {children}
      </Container>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </Box>
  );
};

export default Layout;
