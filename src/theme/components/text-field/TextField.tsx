import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const TextField: Components<Omit<Theme, 'components'>>['MuiTextField'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            padding: theme.spacing(1.25, 1.2),
            border: 1,
            borderStyle: 'solid',
            borderColor: theme.palette.action.disabledBackground,
            borderRadius: theme.shape.borderRadius * 3,
            background: theme.palette.neutral.white,
        }),
    },
}

export default TextField;