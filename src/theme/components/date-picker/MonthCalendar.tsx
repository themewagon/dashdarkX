import type { Theme, Components } from '@mui/material/styles';

const MonthCalendar: Components<Omit<Theme, 'components'>>['MuiMonthCalendar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '& .MuiMonthCalendar-button.Mui-selected': {
        background: `${theme.palette.primary.main} !important`,
      },
    }),
  },
};

export default MonthCalendar;
