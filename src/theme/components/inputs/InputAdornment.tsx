import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputAdornment: Components<Omit<Theme, 'components'>>['MuiInputAdornment'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      margin: '0 !important',
      paddingRight: theme.spacing(0.75),
      color: theme.palette.text.secondary,
      fontSize: theme.typography.h6.fontSize,
    }),
  },
};

export default InputAdornment;
