import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
    defaultProps: {
        disableElevation: true,
    },
    styleOverrides: {
        root: ({ theme, ownerState }) => ({
            color: theme.palette.neutral.contrastText,
            fontSize: '10px',
            fontWeight: 700,
            borderRadius: '8px',
            backgroundColor: ownerState.color === 'primary' ? 
                            theme.palette.primary.main : theme.palette.neutral.light,
            '&:hover': {
                backgroundColor: ownerState.color === 'primary' ? 
                            theme.palette.primary.main : theme.palette.neutral.light,
            }
        }),
        sizeMedium: {
            height: '35px',
            width: '186px'
        },
        sizeSmall: {
            height: '28px',
            width: '70px'
        }
    },
}

export default Button;