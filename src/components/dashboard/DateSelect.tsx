import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const DateSelect = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker views={['month', 'year']} defaultValue={dayjs('May-2024')} sx={{padding: 0, border: 0, boxShadow: 0, '& .MuiIconButton-edgeEnd': {color: '#fff'},  '& .MuiOutlinedInput-root': {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderWidth: 0,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderWidth: 0,
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: 0,
                },
            },}}/>
        </LocalizationProvider>
    );
}

export default DateSelect;