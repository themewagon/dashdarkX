import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.primary,
      fontWeight: theme.typography.button.fontWeight,
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
    containedSecondary: ({ theme }) => ({
      background: theme.palette.info.dark,
      '&:hover': { background: theme.palette.info.dark },
    }),
    containedSizeLarge: ({ theme }) => ({
      width: '100%',
      padding: theme.spacing(1.25, 1.75),
      fontSize: theme.typography.button.fontSize,
    }),
    containedSizeMedium: ({ theme }) => ({
      padding: theme.spacing(0.75, 1.15),
      fontSize: theme.typography.subtitle2.fontSize,
    }),
    containedSizeSmall: ({ theme }) => ({
      padding: theme.spacing(0.875, 1.15),
      fontSize: theme.typography.caption.fontSize,
    }),
  },
};

export default Button;
