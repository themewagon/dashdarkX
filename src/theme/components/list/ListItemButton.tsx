import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const ListItemButton: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
    defaultProps: {
        disableRipple: true,
    },
    styleOverrides: {
        root: ({ theme }) => ({
            padding: theme.spacing(1.5, 2),
            borderRadius: theme.shape.borderRadius * 2,
            '&:hover': {
                backgroundColor: theme.palette.action.hover
            }
        })
    },
}

export default ListItemButton;