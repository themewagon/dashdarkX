import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const InputBase: Components<Omit<Theme, 'components'>>['MuiInputBase'] = {
    styleOverrides: {
        root: {
            '&:before, &:after': {
                display: 'none',
            },
        },
    },
}

export default InputBase;