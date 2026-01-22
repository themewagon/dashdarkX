import type { Theme, Components } from '@mui/material/styles';

const YearCalendar: Components<Omit<Theme, 'components'>>['MuiYearCalendar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '& .MuiYearCalendar-button.Mui-selected': {
        background: `${theme.palette.primary.main} !important`,
      },
    }),
  },
};

export default YearCalendar;
