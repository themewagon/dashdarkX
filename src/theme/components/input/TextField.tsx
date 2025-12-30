import type { Theme, Components } from '@mui/material/styles';

const TextField: Components<Omit<Theme, 'components'>>['MuiTextField'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: theme.customShadows[1],
    }),
  },
};

export default TextField;
