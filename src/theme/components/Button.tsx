import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
    defaultProps: {
        disableElevation: true,
    },
    styleOverrides: {
        root: ({ theme, ownerState }) => ({
            color: theme.palette.neutral.contrastText,
            fontSize: '0.625rem',
            fontWeight: 700,
            borderRadius: theme.shape.borderRadius * 2,
            backgroundColor: ownerState.color === 'primary' ? 
                            theme.palette.primary.main : theme.palette.neutral.light,
            '&:hover': {
                backgroundColor: ownerState.color === 'primary' ? 
                            theme.palette.primary.main : theme.palette.neutral.light,
            }
        }),
        sizeMedium: {
            height: 35,
            width: 186
        },
        sizeSmall: {
            height: 28,
            width: 70
        }
    },
}

export default Button;