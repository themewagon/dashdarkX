import { svgIconClasses } from '@mui/material';
import type { Theme, Components } from '@mui/material/styles';
import CheckBoxBlankIcon from 'components/icons/CheckboxBlankIcon';
import CheckBoxCheckedIcon from 'components/icons/CheckboxCheckedIcon';
import CheckBoxIndeterminateIcon from 'components/icons/CheckboxIndeterminateIcon';

const Checkbox: Components<Omit<Theme, 'components'>>['MuiCheckbox'] = {
  defaultProps: {
    icon: <CheckBoxBlankIcon />,
    checkedIcon: <CheckBoxCheckedIcon />,
    indeterminateIcon: <CheckBoxIndeterminateIcon />,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.secondary,
    }),
    sizeMedium: ({ theme }) => ({
      [`& .${svgIconClasses.root}`]: {
        fontSize: theme.typography.button.fontSize,
      },
    }),
    sizeSmall: ({ theme }) => ({
      [`& .${svgIconClasses.root}`]: {
        fontSize: theme.typography.caption.fontSize,
      },
    }),
  },
};

export default Checkbox;
