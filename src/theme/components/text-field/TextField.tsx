import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const TextField: Components<Omit<Theme, 'components'>>['MuiTextField'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            border: 1,
            borderStyle: 'solid',
            borderColor: theme.palette.info.lighter,
            borderRadius: theme.shape.borderRadius,
            background: theme.palette.info.main,
            boxShadow: theme.customShadows[1],
            padding: theme.spacing(1, 1.25),
        }),
    },
}

export default TextField;