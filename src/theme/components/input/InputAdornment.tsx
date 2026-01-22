import { boxClasses, iconButtonClasses } from '@mui/material';
import type { Theme, Components } from '@mui/material/styles';

const InputAdornment: Components<Omit<Theme, 'components'>>['MuiInputAdornment'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.secondary,
      fontSize: theme.typography.h6.fontSize,
      margin: '0 !important',
      padding: 0,

      [`& .${iconButtonClasses.root}`]: {
        padding: 0,
      },
    }),
    positionStart: ({ theme }) => ({
      paddingRight: theme.spacing(1),
    }),
    positionEnd: ({ theme }) => ({
      paddingLeft: theme.spacing(1),
    }),
    sizeSmall: ({ theme }) => ({
      [`& .${boxClasses.root}`]: {
        fontSize: theme.typography.body1.fontSize,
      },
    }),
  },
};

export default InputAdornment;
