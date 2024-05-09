import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const InputAdornment: Components<Omit<Theme, 'components'>>['MuiInputAdornment'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            margin: '0 !important',
            padding: theme.spacing(0, 0.5),
            color: theme.palette.neutral.dark,
            fontSize: theme.typography.h5.fontSize,
        })
    },
}

export default InputAdornment;