import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FilledInput: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  styleOverrides: {
    root: {},
    input: {
      padding: 0,
    },
  },
};

export default FilledInput;
