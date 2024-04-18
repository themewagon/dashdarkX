import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const Drawer: Components<Omit<Theme, 'components'>>['MuiDrawer'] = {
    styleOverrides: {
        root: {
            // desktop
            '& .css-rbkeor-MuiPaper-root-MuiDrawer-paper': {
                position: 'sticky',
                top: '30px',
                width: '265px',
                height: 'calc(100vh - 60px)',
                boxSizing: 'border-box',
                borderRight: 'none',
                maxHeight: '910px',
            },

            // mobile
            '& .css-4kho5a-MuiPaper-root-MuiDrawer-paper': {
                position: 'fixed',
                top: '30px',
                left: '30px',
                width: '265px',
                height: 'calc(100vh - 60px)',
                boxSizing: 'border-box',
                borderRight: 'none',
                maxHeight: '910px',
            }
        }
    },
}

export default Drawer;