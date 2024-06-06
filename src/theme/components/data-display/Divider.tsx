import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Divider: Components<Omit<Theme, 'components'>>['MuiDivider'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      margin: theme.spacing(2, 0),
      backgroundColor: theme.palette.neutral.darker,

      '&.MuiDivider-withChildren': {
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
