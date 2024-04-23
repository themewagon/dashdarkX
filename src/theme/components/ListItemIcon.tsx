import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const ListItemIcon: Components<Omit<Theme, 'components'>>['MuiListItemIcon'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            marginRight: theme.spacing(1.5),
            borderRadius: theme.shape.borderRadius * 2,
            minWidth: 0,
            height: 30,
            width: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        })
    },
}

export default ListItemIcon;