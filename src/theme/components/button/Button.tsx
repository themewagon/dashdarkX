import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.button,
      color: theme.palette.text.primary,
      borderRadius: theme.shape.borderRadius,
      textTransform: 'initial',
      letterSpacing: 0.5,
    }),
    containedPrimary: ({ theme }) => ({
      background: `linear-gradient(128.49deg, ${theme.palette.gradients.primary.main} 19.86%, ${theme.palette.gradients.primary.state} 68.34%)`,
      '&:hover': {
        background: `linear-gradient(128.49deg, ${theme.palette.gradients.primary.main} 19.86%, ${theme.palette.gradients.primary.state} 68.34%)`,
      },
    }),
    containedSizeLarge: ({ theme }) => ({
      padding: theme.spacing(1.25, 1.75),
      width: '100%',
    }),
    containedSizeSmall: ({ theme }) => ({
      fontSize: theme.typography.body2.fontSize,
      padding: theme.spacing(0.5, 1.5),
    }),
    endIcon: ({ theme }) => ({
      fontSize: theme.typography.caption.fontSize,
    }),
  },
};

export default Button;
