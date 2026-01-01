import type { Theme, Components } from '@mui/material/styles';

const Divider: Components<Omit<Theme, 'components'>>['MuiDivider'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      margin: theme.spacing(2, 0),
      backgroundColor: theme.palette.neutral.darker,

      '&.MuiDivider-withChildren': {
        color: theme.palette.text.secondary,
        backgroundColor: 'transparent',
        '&::before': {
          backgroundColor: theme.palette.neutral.darker,
        },
        '&::after': {
          backgroundColor: theme.palette.neutral.darker,
        },
      },
    }),
  },
};

export default Divider;
