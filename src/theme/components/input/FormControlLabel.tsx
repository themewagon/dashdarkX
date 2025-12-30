import type { Theme, Components } from '@mui/material/styles';

const FormControlLabel: Components<Omit<Theme, 'components'>>['MuiFormControlLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingLeft: theme.spacing(0.25),
    }),
    label: ({ theme }) => ({
      letterSpacing: 0.5,
      marginTop: theme.spacing(0.25),
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body2.fontSize,
    }),
  },
};

export default FormControlLabel;
