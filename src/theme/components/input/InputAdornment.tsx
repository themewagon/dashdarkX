import type { Theme, Components } from '@mui/material/styles';

const InputAdornment: Components<Omit<Theme, 'components'>>['MuiInputAdornment'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      margin: '0 !important',
      paddingRight: theme.spacing(0.75),
      color: theme.palette.text.secondary,
      fontSize: theme.typography.h6.fontSize,

      '&.MuiInputAdornment-sizeSmall': {
        '& .MuiBox-root': {
          fontSize: theme.typography.body1.fontSize,
        },
      },
    }),
  },
};

export default InputAdornment;
