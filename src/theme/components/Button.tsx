import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
    defaultProps: {
        disableElevation: true,
    },
    styleOverrides: {
        root: ({ theme }) => ({
            color: theme.palette.neutral.contrastText,
            fontSize: '0.625rem',
            fontWeight: 700,
            letterSpacing: 0.5,
            borderRadius: theme.shape.borderRadius * 2,

            '&.MuiButton-colorPrimary': {
                backgroundColor: theme.palette.primary.main,
            },
            '&.MuiButton-colorSecondary': {
                backgroundColor: theme.palette.neutral.light
            },
            '&:hover': {
                '&.MuiButton-colorPrimary': {
                    backgroundColor: theme.palette.primary.main,
                },
                '&.MuiButton-colorSecondary': {
                    backgroundColor: theme.palette.neutral.light
                },
            },
            '&.MuiButton-containedSizeMedium': {
                padding: theme.spacing(1.25, 6.25)
            },
            '&.MuiButton-containedSizeSmall': {
                padding: theme.spacing(1.125, 2.125),
            }
        }),
    },
}

export default Button;