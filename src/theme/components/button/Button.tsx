import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
    defaultProps: {
        disableElevation: true,
    },
    styleOverrides: {
        root: ({ theme }) => ({
            ...theme.typography.button,
            color: theme.palette.neutral.white,
            borderRadius: theme.shape.borderRadius * 2,
            letterSpacing: 0.5
        }),
        containedPrimary: ({ theme }) => ({
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
            }
        }),
        containedSecondary: ({ theme }) => ({
            backgroundColor: theme.palette.neutral.light,
            '&:hover': {
                backgroundColor: theme.palette.neutral.light,
            }
        }),
        containedSizeMedium: ({ theme }) => ({
            padding: theme.spacing(1.25, 6.25)
        }),
        containedSizeSmall: ({ theme }) => ({
            padding: theme.spacing(1.125, 2.125)
        })
    },
}

export default Button;