import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const DataGrid: Components<Omit<Theme, 'components'>>['MuiDataGrid'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            border: 'none',
            borderRadius: 0,
            '.css-1pmk00y-MuiDataGrid-columnHeaders': {
                borderRadius: 0,
                backgroundColor: 'red'
            },
            '& .MuiDataGrid-container--top [role=row]': {
                background: theme.palette.action.hover,
                borderRadius: 0,
                borderTop: 1,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: 1,
                borderStyle: 'solid',
                borderColor: '#E2E8F0'
            },
            '& .MuiDataGrid-main': {
                borderRadius: 0
            }
        })
    },
}

export default DataGrid;