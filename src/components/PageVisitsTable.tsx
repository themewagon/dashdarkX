import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';

// const columns: GridColDef<(typeof rows)[number]>[] = [
//     {
//         field: 'pageName',
//         headerName: 'PAGE NAME',
//         editable: true,
//         align: 'left',
//         flex: 1
//     },
//     {
//         field: 'visitors',
//         headerName: 'VISITORS',
//         editable: true,
//         align: 'left',
//         flex: 1
//     },
//     {
//         field: 'uniqueUsers',
//         headerName: 'UNIQUE USERS',
//         editable: true,
//         align: 'left',
//         flex: 1
//     },
//     {
//         field: 'bounceRate',
//         headerName: 'BOUNCE RATE',
//         sortable: true,
//         align: 'right',
//         flex: 1
//     },
// ];

// const rows = [
//     { id: 1, pageName: '/argon/', visitors: '4,569', uniqueUsers: 40, bounceRate: '50%'},
//     { id: 2, pageName: '/argon/index.html', visitors: '3,985', uniqueUsers: 40, bounceRate: '50%'},
//     { id: 3, pageName: '/argon/charts.html', visitors: '3,513', uniqueUsers: 40, bounceRate: '50%'},
//     { id: 4, pageName: '/argon/tables.html', visitors: '2,050', uniqueUsers: 40, bounceRate: '50%'},
//     { id: 5, pageName: '/argon/profile.html', visitors: '1,795', uniqueUsers: 40, bounceRate: '50%'},
//     { id: 6, pageName: '/argon/about.html', visitors: '1,795', uniqueUsers: 40, bounceRate: '50%'},
//     { id: 7, pageName: '/argon/sales.html', visitors: '1,795', uniqueUsers: 40, bounceRate: '50%'},
//     { id: 8, pageName: '/argon/data.html', visitors: '1,795', uniqueUsers: 40, bounceRate: '50%'},
//     { id: 9, pageName: '/argon/tools.html', visitors: '1,795', uniqueUsers: 40, bounceRate: '50%'},
// ];

const PageVisitsTable = () => {
    return (
        <Box component={Paper} sx={{ p: 0, height: 360, width: '100%' }}>
            <Box sx={(theme) => ({p: theme.spacing(3, 2.5), display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: 0,  borderBottom: 1, borderStyle: 'solid', borderColor: '#E2E8F0'})}>
                <Typography variant="h6" color="grey.700">Page visits</Typography>
                <Button variant="contained" size="small" color="primary">SEE ALL</Button>
            </Box>
            
            {/* <DataGrid
                density="compact"
                columns={columns}
                rows={rows}
                hideFooterSelectedRowCount
                disableColumnResize
                disableColumnMenu
                disableColumnSelector
                disableRowSelectionOnClick
                autosizeOptions={{
                    includeOutliers: true,
                    includeHeaders: true,
                    outliersFactor: 1.2,
                    expand: true,
                }}
            /> */}
        </Box>
    );
}

export default PageVisitsTable;