import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const ListItemButton: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
    defaultProps: {
        disableRipple: true,
    },
    styleOverrides: {
        root: ({ theme }) => ({
            width: '100%', 
            height: 54,
            borderRadius: theme.shape.borderRadius * 2,
            '&:hover': {
                backgroundColor: 'transparent'
            }
        })
    },
}

export default ListItemButton;