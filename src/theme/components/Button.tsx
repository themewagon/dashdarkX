import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
    defaultProps: {
        disableElevation: true,
    },
    styleOverrides: {
        root: ({ theme }) => ({
            padding: '0px 8px',
            width: '186px',
            height: '35px',
            borderRadius: '8px',
            backgroundColor: theme.palette.secondary.main,
            '&:hover': {
                backgroundColor: theme.palette.secondary.main
            }
        }),
    },
}

export default Button;