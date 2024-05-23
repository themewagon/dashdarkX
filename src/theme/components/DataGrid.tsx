import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const DataGrid: Components<Omit<Theme, 'components'>>['MuiDataGrid'] = {
    styleOverrides: {
        root: {
            border: 'none',
            '--DataGrid-rowBorderColor': 'transparent',
        },
        cell: ({ theme }) => ({
            fontSize: theme.typography.subtitle2.fontSize,
            color: theme.palette.text.primary,
            '&:hover': {
                cursor: 'pointer'
            },
            '&:focus-within': {
                outline: 'none !important',
            } 
        }),
        row: ({theme}) => ({
            padding: theme.spacing(0, 2),
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.info.dark,
            },
        }),
        columnHeaders: ({ theme }) => ({
            padding: theme.spacing(0, 2),
        }),
        columnHeader: ({ theme }) => ({
            background: theme.palette.info.main,
            '&:focus-within': {
                outline: 'none !important',
            },
        }),
        columnHeaderTitle: ({ theme }) => ({
            letterSpacing: 1,
            fontWeight: theme.typography.subtitle2.fontWeight,
        })
    },
}

export default DataGrid;