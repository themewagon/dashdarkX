import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const ListItemButton: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
    defaultProps: {
        disableRipple: true,
    },
    styleOverrides: {
        root: {
            width: '100%', 
            height: '54px',
            borderRadius: '8px',
            '&:hover': {
                backgroundColor: 'transparent'
            }
        }
    },
}

export default ListItemButton;