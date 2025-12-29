import type { Theme, Components } from '@mui/material/styles';

const ListItemButton: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      '&:hover': {
        backgroundColor: theme.palette.info.dark,
      },
    }),
  },
};

export default ListItemButton;
