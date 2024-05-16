import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const DatePicker: Components<Omit<Theme, 'components'>>['MuiDatePicker'] = {
    defaultProps: {},
}

export default DatePicker;