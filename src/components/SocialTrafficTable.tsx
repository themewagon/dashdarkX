import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DataGridFooter from './DataGridFooter';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';

const columns: GridColDef<(typeof rows)[number]>[] = [
    {
        field: 'referral',
        headerName: 'REFERRAL',
        editable: false,
        align: 'left',
        flex: 2,
        renderCell: (params) => {
            return <Box sx={{ fontWeight: 700 }}>{params.value}</Box>;
        },
    },
    {
        field: 'visitors',
        headerName: 'VISITORS',
        editable: false,
        align: 'left',
        flex: 1
    },
    {
        field: 'progress',
        headerName: '',
        editable: false,
        align: 'left',
        flex: 2,
        renderCell: (params) => {
            return <Stack alignItems="center" gap={1} sx={{height: 1, width: 1}}>
                <Typography variant="body2" sx={{fontWeight: 700}}>{params.value}%</Typography>
                <LinearProgress variant="determinate" value={params.value} sx={{width: 1, maxWidth: '240px', height: '0.2rem', '& .MuiLinearProgress-bar': {
                    backgroundColor: `${params.value > 70 ? '#0BC5EA' : '#ED8936'}`,
                }}}/>
            </Stack>;
        },
    }
];

const rows = [
    { id: 1, referral: 'Facebook', visitors: '1,480', progress: 60},
    { id: 2, referral: 'Facebook', visitors: '5,480', progress: 70},
    { id: 3, referral: 'Google', visitors: '4,807', progress: 80},
    { id: 4, referral: 'Instagram', visitors: '3,678', progress: 75},
    { id: 5, referral: 'Twitter', visitors: '2,645', progress: 30},
    { id: 6, referral: 'Instagram', visitors: '1,560', progress: 40},
    { id: 7, referral: 'LinkedIn', visitors: '1,480', progress: 80},
    { id: 8, referral: 'LinkedIn', visitors: '2,262', progress: 55},
    { id: 9, referral: 'Google', visitors: '3,094', progress: 80},
    { id: 10, referral: 'Twitter', visitors: '1,016', progress: 70},
];

const SocialTrafficTable = () => {
    return (
        <Box component={Paper} sx={{ p: 0, height: 'auto', width: 1 }}>
            <Stack alignItems="center" justifyContent="space-between" sx={(theme) => ({p: theme.spacing(3, 2.5)})}>
                <Typography variant="h6" color="grey.700">Social traffic</Typography>
                <Button variant="contained" size="small" color="primary">SEE ALL</Button>
            </Stack>
            
            <Box sx={{width: 1}}>
            <DataGrid
                density="standard"
                columns={columns}
                rows={rows}
                disableColumnResize
                disableColumnMenu
                disableColumnSelector
                disableRowSelectionOnClick
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                autosizeOptions={{
                    includeOutliers: true,
                    includeHeaders: false,
                    outliersFactor: 1,
                    expand: true,
                }}
                autoHeight
                pageSizeOptions={[5]}
                slots={{
                    pagination: DataGridFooter,
                }}
                sx={{ '--unstable_DataGrid-radius': 0 }}
                />
            </Box>
        </Box>
    );
}

export default SocialTrafficTable;