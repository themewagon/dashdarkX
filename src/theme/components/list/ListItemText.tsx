import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const ListItemText: Components<Omit<Theme, 'components'>>['MuiListItemText'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            color: theme.palette.neutral.light,
        }),
        primary: ({ theme }) => ({
            ...theme.typography.caption
        })
    },
}

export default ListItemText;