import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const DateSelect = () => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker views={['month', 'year']} defaultValue={dayjs('May-2024')} format='MMM YYYY'
            sx={{
                padding: 0,
                border: 0,
                boxShadow: 0,
                bgcolor: 'info.dark',
                '& .MuiIconButton-edgeEnd': {
                    color: 'text.secondary',

                    '& .MuiSvgIcon-fontSizeMedium': {
                        fontSize: '1.2rem'
                    }
                },
                '& .MuiOutlinedInput-input': {
                    padding: 0,
                    color: 'text.secondary',
                    paddingLeft: '0.4rem',
                    fontSize: '0.875rem',
                    height: '30px',
                    width: '68px'
                },
                '& .MuiOutlinedInput-root': {
                    paddingRight: '0.4rem',

                    '& .MuiOutlinedInput-notchedOutline': {
                        borderWidth: 0,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderWidth: 0,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderWidth: 0,
                    },
                }
            }}/>
        </LocalizationProvider>
    );
}

export default DateSelect;