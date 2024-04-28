import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const ListItemIcon: Components<Omit<Theme, 'components'>>['MuiListItemIcon'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            minWidth: 0,
            marginRight: theme.spacing(1.5),
            padding: theme.spacing(1),
            borderRadius: theme.shape.borderRadius * 2,
        })
    },
}

export default ListItemIcon;