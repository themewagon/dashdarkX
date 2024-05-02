import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const DataGrid: Components<Omit<Theme, 'components'>>['MuiDataGrid'] = {
    styleOverrides: {
        root: {
            borderRadius: '0 !important',
            border: 'none',
        },
        cell: ({ theme }) => ({
            padding: theme.spacing(0, 3),
            fontSize: theme.typography.subtitle2.fontSize,
            color: theme.palette.action.active,

            '&:hover': {
                cursor: 'pointer'
            },
            
            '&:focus-within': {
                outline: 'none !important',
            } 
        }),
        columnHeader: ({ theme }) => ({
            border: 0,
            borderTop: 1,
            borderStyle: 'solid',
            borderColor: theme.palette.action.disabledBackground,
            background: theme.palette.action.hover,
            padding: theme.spacing(0, 3),
            height: '3rem !important',

            '&:focus-within': {
                outline: 'none !important',
            },
        }),
        columnHeaderTitle: ({ theme }) => ({
            color: theme.palette.action.disabled,
            fontSize: theme.typography.button.fontSize,
            fontWeight: `${theme.typography.button.fontWeight} !important`,
        }),
    },
}

export default DataGrid;