import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
    defaultProps: {
        disableElevation: true,
    },
    styleOverrides: {
        root: {
            color: '#fff',
            padding: '0px 8px',
            height: '35px',
            borderRadius: '8px'
        },
    },
}

export default Button;