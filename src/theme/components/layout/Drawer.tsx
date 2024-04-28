import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const Drawer: Components<Omit<Theme, 'components'>>['MuiDrawer'] = {
    styleOverrides: {
        root: {},
        paper: {
            position: 'sticky',
            top: 30,
            left: 30,
            width: 265,
            height: 'calc(100vh - 60px)',
            boxSizing: 'border-box',
            borderRight: 'none',
            maxHeight: 910,
        }
    },
}

export default Drawer;