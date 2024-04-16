import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const ListItemText: Components<Omit<Theme, 'components'>>['MuiListItemText'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            color: theme.palette.neutral.light,
        
            '.css-22b82w-MuiTypography-root': {
                fontSize: '12px',
                fontWeight: 700
            }
        })
    },
}

export default ListItemText;