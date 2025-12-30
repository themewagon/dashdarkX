import type { Theme, Components } from '@mui/material/styles';

const Paper: Components<Omit<Theme, 'components'>>['MuiPaper'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3.5),
      backgroundColor: theme.palette.info.main,
      boxShadow: theme.customShadows[0],
      borderRadius: Number(theme.shape.borderRadius) * 3,

      '&.MuiMenu-paper': {
        padding: theme.spacing(0),
      },
    }),
  },
};

export default Paper;
