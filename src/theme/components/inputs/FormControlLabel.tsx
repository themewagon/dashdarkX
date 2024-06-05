import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FormControlLabel: Components<Omit<Theme, 'components'>>['MuiFormControlLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingLeft: theme.spacing(0.25),
    }),
    label: ({ theme }) => ({
      fontSize: theme.typography.body2.fontSize,
      fontWeight: theme.typography.button.fontWeight,
      color: theme.palette.text.secondary,
      letterSpacing: 0.5,
    }),
  },
};

export default FormControlLabel;
