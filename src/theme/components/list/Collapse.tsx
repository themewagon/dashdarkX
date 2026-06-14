import type { Theme, Components } from '@mui/material/styles';
import { listClasses } from '@mui/material';

const Collapse: Components<Omit<Theme, 'components'>>['MuiCollapse'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0, 1),

      [`& .${listClasses.root}`]: {
        padding: 0,
        margin: theme.spacing(1, 0),
      },
    }),
  },
};

export default Collapse;
