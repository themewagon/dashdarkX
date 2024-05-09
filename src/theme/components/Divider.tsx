import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const Divider: Components<Omit<Theme, 'components'>>['MuiDivider'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            margin: theme.spacing(2, 0),
            backgroundColor: theme.palette.info.lighter
        })
    }
}

export default Divider;