import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  pickersInputBaseClasses,
  pickersOutlinedInputClasses,
} from '@mui/x-date-pickers/PickersTextField';
import { pickersSectionListClasses } from '@mui/x-date-pickers/PickersSectionList';
import { iconButtonClasses } from '@mui/material';
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
          flexShrink: 0,
          [`& .${pickersInputBaseClasses.root}`]: {
            px: 1,
            background: `${theme.palette.info.dark} !important`,

            '& .MuiPickersInputBase-sectionsContainer': {
              py: 1,
              width: 'auto',
              minWidth: 80,
            },
          },
          [`& .${pickersOutlinedInputClasses.root}`]: {
            [`& .${pickersOutlinedInputClasses.notchedOutline}`]: {
              borderWidth: 0,
            },
            [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
              borderWidth: 0,
            },
            [`&.Mui-focused .${pickersOutlinedInputClasses.notchedOutline}`]: {
              borderWidth: 0,
            },
          },
          [`& .${pickersSectionListClasses.sectionContent}`]: {
            color: 'text.secondary',
            fontSize: 'body2.fontSize',
            fontWeight: 500,
          },
          [`& .${iconButtonClasses.edgeEnd}`]: {
            color: 'text.secondary',
            margin: 0,

            '& > svg': {
              fontSize: 'subtitle1.fontSize',
            },
          },
        })}
      />
    </LocalizationProvider>
  );
};

export default DateSelect;
