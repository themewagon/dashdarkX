import type { Theme, Components } from '@mui/material/styles';

const YearCalendar: Components<Omit<Theme, 'components'>>['MuiYearCalendar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '& .MuiPickersYear-root': {
        '& .MuiPickersYear-yearButton': {
          '&.Mui-selected': {
            background: theme.palette.primary.main,
          },
        },
      },
    }),
  },
};

export default YearCalendar;
