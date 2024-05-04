import { DefaultTheme } from '@mui/styles';
import { colors } from '../colors';

export default function Card(theme: DefaultTheme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background,
          display: 'flex',
          marginBottom: 4,
          transition: 'transform 0.2s',
          maxWidth: 500,
          '&:hover': {
            transform: 'scale(1.05)',
            cursor: 'pointer',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    },
  };
}
