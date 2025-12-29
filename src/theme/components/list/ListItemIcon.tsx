import type { Theme, Components } from '@mui/material/styles';

const ListItemIcon: Components<Omit<Theme, 'components'>>['MuiListItemIcon'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minWidth: '0 !important',
      marginRight: theme.spacing(0.75),
      color: theme.palette.text.secondary,
      fontSize: theme.typography.h5.fontSize,
    }),
  },
};

export default ListItemIcon;
