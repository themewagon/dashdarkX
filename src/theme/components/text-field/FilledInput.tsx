import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const FilledInput: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            paddingLeft: 0,
            background: `${theme.palette.neutral.white} !important`,
            borderRadius: 0,
        }),
        input: ({ theme }) => ({
            padding: 0,
            paddingLeft: theme.spacing(0.6),
            fontSize: theme.typography.body1.fontSize,
        })
    },
}

export default FilledInput;