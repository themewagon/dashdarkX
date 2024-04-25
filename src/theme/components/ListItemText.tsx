import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const ListItemText: Components<Omit<Theme, 'components'>>['MuiListItemText'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            color: theme.palette.neutral.light,

            '& .MuiListItemText-primary': {
                fontSize: '0.75rem',
                fontWeight: 700
            }
        })
    },
}

export default ListItemText;