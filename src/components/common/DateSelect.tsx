import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const DateSelect = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        views={['month', 'year']}
        defaultValue={dayjs('Jan-2024')}
        format="MMM YYYY"
        sx={(theme) => ({
          boxShadow: 0,
          '& .MuiPickersInputBase-root': {
            px: 1,
            background: `${theme.palette.info.dark} !important`,

            '& .MuiPickersInputBase-sectionsContainer': {
              py: 1,
              width: 'auto',
              minWidth: 80,
            },
          },
          '& .MuiPickersOutlinedInput-root': {
            '& .MuiPickersOutlinedInput-notchedOutline': {
              borderWidth: 0,
            },
            '&:hover .MuiPickersOutlinedInput-notchedOutline': {
              borderWidth: 0,
            },
            '&.Mui-focused .MuiPickersOutlinedInput-notchedOutline': {
              borderWidth: 0,
            },
          },
          '& .MuiPickersSectionList-sectionContent': {
            color: 'text.secondary',
            fontSize: 'body2.fontSize',
            fontWeight: 500,
          },
          '& .MuiIconButton-edgeEnd': {
            color: 'text.secondary',
            '& .MuiSvgIcon-fontSizeMedium': {
              fontSize: 'subtitle1.fontSize',
            },
          },
        })}
      />
    </LocalizationProvider>
  );
};

export default DateSelect;
