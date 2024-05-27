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
            },
            '& .MuiDataGrid-actionsCell': {
               gap: 0
            }
        }),
        actionsCell: {},
        row: ({theme}) => ({
            padding: theme.spacing(0, 2),
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.info.dark,
            },
            '&.MuiDataGrid-row--editing': {
                background: theme.palette.secondary.darker,
                '& .MuiDataGrid-cell': {
                    background: theme.palette.secondary.darker
                }
            }
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
        }),
        footerContainer: ({theme}) => ({
            paddingTop: theme.spacing(3),
            border: 0,
            borderTop: 1,
            borderStyle: 'solid',
            borderColor: `${theme.palette.info.darker} !important`,
        }),
        selectedRowCount: {
            display: 'none'
        }
    },
}

export default DataGrid;