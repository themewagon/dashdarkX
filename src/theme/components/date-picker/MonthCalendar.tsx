import type { Theme, Components } from '@mui/material/styles';
import { monthCalendarClasses } from '@mui/x-date-pickers/MonthCalendar';

const MonthCalendar: Components<Omit<Theme, 'components'>>['MuiMonthCalendar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${monthCalendarClasses.button}.Mui-selected`]: {
        background: `${theme.palette.primary.main} !important`,
      },
    }),
  },
};

export default MonthCalendar;
