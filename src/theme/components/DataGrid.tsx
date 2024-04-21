import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const DataGrid: Components<Omit<Theme, 'components'>>['MuiDataGrid'] = {
    styleOverrides: {
        root: {
            border: 'none',
            borderRadius: 0,
            background: 'blue',
            '& .MuiDataGrid-container--top [role=row]': {
                background: 'red',
                borderRadius: 0
            },
            '& .MuiDataGrid-main': {
                borderRadius: 0
            }
        }
    },
}

export default DataGrid;