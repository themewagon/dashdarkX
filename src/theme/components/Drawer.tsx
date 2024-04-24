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
            '& .MuiPaper-elevation0': {
                position: 'sticky',
                ...commonStyles
            },

            // mobile
            '& .MuiPaper-elevation16': {
                position: 'fixed', left: 30,
                ...commonStyles
            }
        }
    },
}

export default Drawer;