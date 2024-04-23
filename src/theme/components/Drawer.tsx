import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const commonStyles = {
    top: 30,
    width: 265,
    height: 'calc(100vh - 60px)',
    boxSizing: 'border-box',
    borderRight: 'none',
    maxHeight: 910,
}

const Drawer: Components<Omit<Theme, 'components'>>['MuiDrawer'] = {
    styleOverrides: {
        root: {
            // desktop
            '& .css-rbkeor-MuiPaper-root-MuiDrawer-paper': {
                position: 'sticky',
                ...commonStyles
            },

            // mobile
            '& .css-4kho5a-MuiPaper-root-MuiDrawer-paper': {
                position: 'fixed', left: 30,
                ...commonStyles
            }
        }
    },
}

export default Drawer;