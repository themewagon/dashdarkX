import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
    {
        field: 'pageName',
        headerName: 'PAGE NAME',
        editable: true,
        align: 'left',
    },
    {
        field: 'visitors',
        headerName: 'VISITORS',
        editable: true,
        align: 'left'
    },
    {
        field: 'uniqueUsers',
        headerName: 'UNIQUE USERS',
        editable: true,
        align: 'left'
    },
    {
        field: 'bounceRate',
        headerName: 'BOUNCE RATE',
        sortable: true,
        align: 'right'
    },
];

const rows = [
    { id: 1, pageName: 'Snow', visitors: 'Jon', uniqueUsers: 40, bounceRate: '50%', age: 14 },
    { id: 2, pageName: 'Lannister', visitors: 'Cersei', uniqueUsers: 40, bounceRate: '50%', age: 31 },
    { id: 3, pageName: 'Lannister', visitors: 'Jaime', uniqueUsers: 40, bounceRate: '50%', age: 31 },
    { id: 4, pageName: 'Stark', visitors: 'Arya', uniqueUsers: 40, bounceRate: '50%', age: 11 },
    { id: 5, pageName: 'Targaryen', visitors: 'Daenerys', uniqueUsers: 40, bounceRate: '50%', age: null },
    { id: 6, pageName: 'Melisandre', visitors: null, uniqueUsers: 40, bounceRate: '50%', age: 150 },
    { id: 7, pageName: 'Clifford', visitors: 'Ferrara', uniqueUsers: 40, bounceRate: '50%', age: 44 },
    { id: 8, pageName: 'Frances', visitors: 'Rossini', uniqueUsers: 40, bounceRate: '50%', age: 36 },
    { id: 9, pageName: 'Roxie', visitors: 'Harvey', uniqueUsers: 40, bounceRate: '50%', age: 65 },
];

const PageVisitsTable = () => {
    const theme = useTheme();

    return (
        <Box component={Paper} sx={{ padding: '0', height: '360px', width: '100%' }}>
            <Box sx={{padding: '24px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography variant="h6" sx={{color: theme.palette.neutral.light}}>Page visits</Typography>
                <Button variant="contained" size="small" color="primary">SEE ALL</Button>
            </Box>
            
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
                },
                }}
                pageSizeOptions={[5]}
                checkboxSelection={false}
                disableRowSelectionOnClick
            />
        </Box>
    );
}

export default PageVisitsTable;