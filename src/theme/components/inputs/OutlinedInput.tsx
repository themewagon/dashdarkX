import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const OutlinedInput: Components<Omit<Theme, 'components'>>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: {},
    input: {
      padding: 0,
    },
  },
};

export default OutlinedInput;
