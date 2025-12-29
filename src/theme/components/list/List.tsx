import type { Theme, Components } from '@mui/material/styles';

const List: Components<Omit<Theme, 'components'>>['MuiList'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1, 0),
    }),
  },
};

export default List;
