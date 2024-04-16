import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const ListItemIcon: Components<Omit<Theme, 'components'>>['MuiListItemIcon'] = {
    styleOverrides: {
        root: {
            marginRight: '12px',
            borderRadius: '8px',
            minWidth: 0,
            height: '30px',
            width: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    },
}

export default ListItemIcon;