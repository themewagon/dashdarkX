import { Box, Paper, Stack, Typography, Button } from '@mui/material';
import DateSelect from 'components/dates/DateSelect';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import IconifyIcon from 'components/base/IconifyIcon';
import StatusChip from 'components/chips/StatusChip';

const DataGridTable = () => {
  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'Order', flex: 1 },
    {
      field: 'client',
      headerName: 'Client',
      editable: true,
      flex: 2,
      renderHeader: () => (
        <Stack alignItems="center" gap={0.8}>
          <IconifyIcon
            icon="mingcute:user-2-fill"
            color="neutral.main"
            sx={(theme) => ({ fontSize: theme.typography.body2.fontSize })}
          />
          <Typography variant="subtitle2" mt={0.5} sx={{letterSpacing: 1}}>
            Client
          </Typography>
        </Stack>
      ),
      renderCell: (params) => {
        return <Stack direction="column" alignSelf="center" justifyContent="center" sx={{height: 1}}>
            <Typography variant="subtitle1">{params.value.name}</Typography>
            <Typography variant="subtitle2" color="text.secondary">{params.value.email}</Typography>
        </Stack>;
      },
    },
    {
      field: 'date',
      headerName: 'Date',
      editable: true,
      flex: 1,
      renderHeader: () => (
        <Stack alignItems="center" gap={0.8}>
          <IconifyIcon
            icon="mdi:calendar"
            color="neutral.main"
            sx={(theme) => ({ fontSize: theme.typography.h6.fontSize })}
          />
          <Typography variant="subtitle2" mt={0.2} sx={{letterSpacing: 1}}>
            Date
          </Typography>
        </Stack>
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      sortable: false,
      flex: 1,
      renderHeader: () => (
        <Stack alignItems="center" gap={0.8}>
          <IconifyIcon
            icon="carbon:checkbox-checked-filled"
            color="neutral.main"
            sx={(theme) => ({ fontSize: theme.typography.h6.fontSize })}
          />
          <Typography variant="subtitle2" mt={0.32} sx={{letterSpacing: 1}}>
            Status
          </Typography>
        </Stack>
      ),
      renderCell: (params) => {
        return <Stack direction="column" alignSelf="center" justifyContent="center" sx={{height: 1}}>
           <StatusChip status={params.value}/>
        </Stack>;
      },
    },
    {
      field: 'country',
      headerName: 'Country',
      sortable: false,
      flex: 1,
      renderHeader: () => (
        <Stack alignItems="center" gap={0.8}>
          <IconifyIcon
            icon="healthicons:geo-location"
            color="neutral.main"
            sx={(theme) => ({ fontSize: theme.typography.h5.fontSize })}
          />
          <Typography variant="subtitle2" mt={0.5} sx={{letterSpacing: 1}}>
            Country
          </Typography>
        </Stack>
      ),
    },
    {
      field: 'total',
      headerName: 'Total',
      headerAlign: 'right',
      align: 'right',
      sortable: false,
      flex: 1,
    },
    {
        field: 'actions',
        headerName: '',
        sortable: false,
        flex: 1,
      },
  ];

  const rows = [
    { id: '#1532', client: {name: 'John Carter', email: 'hello@johncarter.com'}, date: 'Jan 30, 2024', status: 'Delivered', country: 'United States', total: '$ 1,099.24' },
    { id: '#1531', client: {name: 'Sophie Moore', email: 'contact@sophiemoore.com'}, date: 'Jan 27, 2024', status: 'Canceled', country: 'United Kingdom', total: '$ 5,870.32' },
    { id: '#1530', client: {name: 'Matt Cannon', email: 'info@mattcannon.com'}, date: 'Jan 24, 2024', status: 'Delivered', country: 'Australia', total: '$ 13,899.48' },
    { id: '#1529', client: {name: 'Graham Hills', email: 'hi@grahamhills.com'}, date: 'Jan 21, 2024', status: 'Pending', country: 'India', total: '$ 1,569.12' },
    { id: '#1528', client: {name: 'Sandy Houston', email: 'contact@sandyhouston.com'}, date: 'Jan 18, 2024', status: 'Delivered', country: 'Canada', total: '$ 899.16' },
    { id: '#1527', client: {name: 'Andy Smith', email: 'hello@andysmith.com'}, date: 'Jan 15, 2024', status: 'Pending', country: 'United States', total: '$ 2,449.64' },
    { id: '#1526', client: {name: 'Emma Grace', email: 'wow@emmagrace.com'}, date: 'Jan 12, 2024', status: 'Delivered', country: 'Australia', total: '$ 6729.82' },
    { id: '#1525', client: {name: 'Ava Rose', email: 'me@avarose.com'}, date: 'Jan 09, 2024', status: 'Canceled', country: 'Canada', total: '$ 784.94' },
    { id: '#1524', client: {name: 'Olivia Jane', email: 'info@oliviajane.com'}, date: 'Jan 06, 2024', status: 'Pending', country: 'Singapur', total: '$ 1247.86' },
    { id: '#1523', client: {name: 'Mason Alexander', email: 'myinfo@alexander.com'}, date: 'Jan 03, 2024', status: 'Delivered', country: 'United States', total: '$ 304.89' },
    { id: '#1522', client: {name: 'Samuel David', email: 'me@samueldavid.com'}, date: 'Jan 01, 2024', status: 'Pending', country: 'Japan', total: '$ 2209.76' },
    { id: '#1521', client: {name: 'Henry Joseph', email: 'contact@henryjoseph.com'}, date: 'Dec 28, 2023', status: 'Delivered', country: 'North Korea', total: '$ 5245.68' },
  ];

  return (
    <Box component={Paper} px={0}>
      <Stack px={3.5} alignItems="center" justifyContent="space-between">
        <Typography
          variant="h6"
          sx={(theme) => ({
            fontWeight: theme.typography.subtitle1.fontWeight,
            fontFamily: 'Work Sans',
          })}
        >
          Orders Status
        </Typography>
        <Stack spacing={1.5} alignItems="center">
          <DateSelect />
          <Button variant="contained" size="small">
            Create order
          </Button>
        </Stack>
      </Stack>

      <Box mt={1.5} sx={{ height: 560, width: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={75}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 6,
              },
            },
          }}
          pageSizeOptions={[6]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default DataGridTable;
