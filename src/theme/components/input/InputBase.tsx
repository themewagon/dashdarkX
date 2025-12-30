import type { Theme, Components } from '@mui/material/styles';

const InputBase: Components<Omit<Theme, 'components'>>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      border: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.neutral.darker,
      borderRadius: theme.shape.borderRadius,
      background: `${theme.palette.info.main} !important`,
      fontSize: theme.typography.subtitle2.fontSize,
      padding: theme.spacing(1.25),
      letterSpacing: 0.5,

      '& input::placeholder': {
        color: theme.palette.text.secondary,
        opacity: 1,
      },
      '&:before, &:after': {
        display: 'none',
      },
    }),
    colorSecondary: ({ theme }) => ({
      background: `${theme.palette.info.darker} !important`,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(1, 1.25),
      fontSize: theme.typography.caption.fontSize,
    }),
  },
};

export default InputBase;
