import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DataGridFooter from './DataGridFooter';

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'pageName',
    headerName: 'PAGE NAME',
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
    flex: 1,
  },
  {
    field: 'uniqueUsers',
    headerName: 'UNIQUE USERS',
    editable: false,
    align: 'left',
    flex: 1,
  },
  {
    field: 'bounceRate',
    headerName: 'BOUNCE RATE',
    headerAlign: 'right',
    align: 'right',
    sortable: true,
    flex: 1,
  },
];

const rows = [
  { id: 1, pageName: '/argon/', visitors: '4,569', uniqueUsers: 340, bounceRate: '46.53%' },
  {
    id: 2,
    pageName: '/argon/index.html',
    visitors: '3,985',
    uniqueUsers: 319,
    bounceRate: '46.53%',
  },
  {
    id: 3,
    pageName: '/argon/charts.html',
    visitors: '3,513',
    uniqueUsers: 294,
    bounceRate: '36.49%',
  },
  {
    id: 4,
    pageName: '/argon/tables.html',
    visitors: '2,050',
    uniqueUsers: 147,
    bounceRate: '50.87%',
  },
  {
    id: 5,
    pageName: '/argon/profile.html',
    visitors: '1,795',
    uniqueUsers: 190,
    bounceRate: '46.53%',
  },
  {
    id: 6,
    pageName: '/argon/about.html',
    visitors: '1,565',
    uniqueUsers: 220,
    bounceRate: '36.25%',
  },
  {
    id: 7,
    pageName: '/argon/sales.html',
    visitors: '1,470',
    uniqueUsers: 175,
    bounceRate: '42.36%',
  },
  {
    id: 8,
    pageName: '/argon/data.html',
    visitors: '1,262',
    uniqueUsers: 152,
    bounceRate: '24.76%',
  },
  {
    id: 9,
    pageName: '/argon/login.html',
    visitors: '1,012',
    uniqueUsers: 231,
    bounceRate: '38.45%',
  },
  {
    id: 10,
    pageName: '/argon/signup.html',
    visitors: '1,054',
    uniqueUsers: 250,
    bounceRate: '39.64%',
  },
];

const PageVisitsTable = () => {
  return (
    <Box component={Paper} sx={{ p: 0, height: 'auto', width: 1 }}>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        sx={(theme) => ({p: theme.spacing(3, 2.5)})}
      >
        <Typography variant="h6" color="grey.700">
          Page visits
        </Typography>
        <Button variant="contained" size="small" color="primary">
          SEE ALL
        </Button>
      </Stack>

      <Box sx={{ width: 1 }}>
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
};

export default PageVisitsTable;
