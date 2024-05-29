import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const List: Components<Omit<Theme, 'components'>>['MuiList'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      width: '100%',
      padding: theme.spacing(0, 2.5),
      background: theme.palette.info.darker,
    }),
  },
};

export default List;
