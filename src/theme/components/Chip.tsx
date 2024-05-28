import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Chip: Components<Omit<Theme, 'components'>>['MuiChip'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      margin: 0,
      border: 1,
      borderStyle: 'solid',
      borderRadius: theme.shape.borderRadius / 2,
    }),
    sizeSmall: ({ theme }) => ({
      height: 24,
      fontSize: theme.typography.body2.fontSize,
      fontWeight: theme.typography.subtitle2.fontWeight,
    }),
    iconSmall: {
      width: 14,
      margin: '0 !important',
    },
    labelSmall: ({ theme }) => ({
      padding: 0,
      paddingTop: theme.spacing(0.3),
      textTransform: 'capitalize',
    }),
  },
};

export default Chip;
