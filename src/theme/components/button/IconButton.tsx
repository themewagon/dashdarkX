import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const IconButton: Components<Omit<Theme, 'components'>>['MuiIconButton'] = {
  styleOverrides: {
    root: {
      marginLeft: 0,
    },
    sizeLarge: ({ theme }) => ({
      fontSize: theme.typography.h5.fontSize,
    }),
    sizeMedium: ({ theme }) => ({
      fontSize: theme.typography.h6.fontSize,
    }),
    sizeSmall: ({ theme }) => ({
      fontSize: theme.typography.button.fontSize,
    }),
  },
};

export default IconButton;
