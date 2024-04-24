import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const Toolbar: Components<Omit<Theme, 'components'>>['MuiToolbar'] = {
    styleOverrides: {
        root: {
            '&.MuiToolbar-root': {
                padding: 0
            }
        },
    },
}

export default Toolbar;