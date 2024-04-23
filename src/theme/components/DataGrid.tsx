import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const DataGrid: Components<Omit<Theme, 'components'>>['MuiDataGrid'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            border: 'none',
            borderRadius: 0,
            '& .MuiDataGrid-container--top [role=row]': {
                background: theme.palette.action.hover,
                borderRadius: 0
            },
            '& .MuiDataGrid-main': {
                borderRadius: 0
            }
        })
    },
}

export default DataGrid;