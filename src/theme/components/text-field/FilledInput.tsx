import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const FilledInput: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            paddingLeft: 0,
            background: `${theme.palette.info.main} !important`,
            borderRadius: 0,
        }),
        input: ({ theme }) => ({
            padding: 0,
            marginTop: theme.spacing(0.4),
            paddingLeft: theme.spacing(0.6),
            fontSize: theme.typography.subtitle2.fontSize,
            letterSpacing: '0.5px',

            "&::placeholder": {
                color: theme.palette.neutral.light,
                opacity: 1,
            }
        })
    },
}

export default FilledInput;