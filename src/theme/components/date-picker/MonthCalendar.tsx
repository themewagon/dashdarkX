import type { Theme, Components } from '@mui/material/styles';

const MonthCalendar: Components<Omit<Theme, 'components'>>['MuiMonthCalendar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '& .MuiPickersMonth-root': {
        '& .MuiPickersMonth-monthButton': {
          '&.Mui-selected': {
            background: theme.palette.primary.main,
          },
        },
      },
    }),
  },
};

export default MonthCalendar;
