import type { Theme, Components } from '@mui/material/styles';
import { yearCalendarClasses } from '@mui/x-date-pickers/YearCalendar';

const YearCalendar: Components<Omit<Theme, 'components'>>['MuiYearCalendar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${yearCalendarClasses.button}.Mui-selected`]: {
        background: `${theme.palette.primary.main} !important`,
      },
    }),
  },
};

export default YearCalendar;
