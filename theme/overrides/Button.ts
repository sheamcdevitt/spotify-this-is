import { DefaultTheme } from '@mui/styles';
import { colors } from '../colors';

export const arkButtonVariant = (theme: DefaultTheme) => {
  return {
    props: { variant: 'ark' },
    style: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
      },
      '&.Mui-disabled': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.secondary.light,
      },
      '&.MuiLoadingButton-loading .MuiLoadingButton-loadingIndicator': {
        color: theme.palette.common.white,
      },
    },
  };
};

export const buttonVariants = (theme: DefaultTheme) => {
  return [
    {
      props: { variant: 'dark' },
      style: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        '&:hover': {
          backgroundColor: theme.palette.grey[700],
          color: theme.palette.common.white,
        },
        '&.Mui-disabled': {
          backgroundColor: theme.palette.grey[700],
        },
        '&.MuiLoadingButton-loading .MuiLoadingButton-loadingIndicator': {
          color: theme.palette.common.white,
        },
      },
    },
    {
      props: { variant: 'faded' },
      style: {
        height: 23,
        color: theme.palette.grey[300],
        fontSize: 14,
        fontWeight: 100,
        border: `1px solid ${theme.palette.grey[300]}`,
        padding: '8px',
      },
    },
  ];
};

export default function Button(theme: DefaultTheme) {
  return {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontWeight: 600,
          backgroundColor: colors.background,
          border: `1px solid ${colors.textPrimary}`,
          color: colors.textPrimary,
          borderRadius: '30px',
          padding: '12px 30px',
          '&:hover': {
            backgroundColor: colors.textPrimary,
            color: colors.background,
            transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  };
}
