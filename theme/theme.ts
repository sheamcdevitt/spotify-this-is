'use client';
import { createTheme } from '@mui/material/styles';
import localFont from 'next/font/local';
import { colors } from './colors';
import Overrides from './overrides';

const circular = localFont({
  src: [
    {
      path: '../fonts/Circular/CircularStd-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/Circular/CircularStd-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../fonts/Circular/CircularStd-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Circular/CircularStd-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/Circular/CircularStd-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Circular/CircularStd-BookItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Circular/CircularStd-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Circular/CircularStd-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
  ],
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: circular.style.fontFamily,

    h1: {
      letterSpacing: '-.03em',
      color: colors.textPrimary,
    },
    h2: {
      letterSpacing: '-.03em',
      color: colors.textPrimary,
    },
    h3: {
      letterSpacing: '-.03em',
      color: colors.textPrimary,
    },
    h4: {
      letterSpacing: '-.03em',
      color: colors.textPrimary,
    },
    h5: {
      letterSpacing: '-.03em',
      color: colors.textPrimary,
    },
    h6: {
      letterSpacing: '-.03em',
      color: colors.textPrimary,
    },
    body1: {
      color: colors.textPrimary,
    },
    body2: {
      color: colors.textPrimary,
    },
    subtitle1: {
      color: colors.textSecondary,
    },
    subtitle2: {
      color: colors.textSecondary,
    },
    caption: {
      color: colors.textSecondary,
    },
    overline: {
      color: colors.textSecondary,
    },
  },
});

theme.components = Overrides(theme);

export default theme;
