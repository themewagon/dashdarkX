import { useState } from 'react';
import Box from '@mui/material/Box';
import IconifyIcon from 'components/base/IconifyIcon';
import { Paper, Stack, Typography, Button } from '@mui/material';
import StatusChip from 'components/chips/StatusChip';
import DateSelect from 'components/dates/DateSelect';
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import DataGridFooter from 'components/data-grid/DataGridFooter';

const initialRows: GridRowsProp = [
  {
    id: '#1532',
    client: { name: 'John Carter', email: 'hello@johncarter.com' },
    date: 'Jan 30, 2024',
    status: 'Delivered',
    country: 'United States',
    total: '$ 1,099.24',
  },
  {
    id: '#1531',
    client: { name: 'Sophie Moore', email: 'contact@sophiemoore.com' },
    date: 'Jan 27, 2024',
    status: 'Canceled',
    country: 'United Kingdom',
    total: '$ 5,870.32',
  },
  {
    id: '#1530',
    client: { name: 'Matt Cannon', email: 'info@mattcannon.com' },
    date: 'Jan 24, 2024',
    status: 'Delivered',
    country: 'Australia',
    total: '$ 13,899.48',
  },
  {
    id: '#1529',
    client: { name: 'Graham Hills', email: 'hi@grahamhills.com' },
    date: 'Jan 21, 2024',
    status: 'Pending',
    country: 'India',
    total: '$ 1,569.12',
  },
  {
    id: '#1528',
    client: { name: 'Sandy Houston', email: 'contact@sandyhouston.com' },
    date: 'Jan 18, 2024',
    status: 'Delivered',
    country: 'Canada',
    total: '$ 899.16',
  },
  {
    id: '#1527',
    client: { name: 'Andy Smith', email: 'hello@andysmith.com' },
    date: 'Jan 15, 2024',
    status: 'Pending',
    country: 'United States',
    total: '$ 2,449.64',
  },
  {
    id: '#1526',
    client: { name: 'Emma Grace', email: 'wow@emmagrace.com' },
    date: 'Jan 12, 2024',
    status: 'Delivered',
    country: 'Australia',
    total: '$ 6729.82',
  },
  {
    id: '#1525',
    client: { name: 'Ava Rose', email: 'me@avarose.com' },
    date: 'Jan 09, 2024',
    status: 'Canceled',
    country: 'Canada',
    total: '$ 784.94',
  },
  {
    id: '#1524',
    client: { name: 'Olivia Jane', email: 'info@oliviajane.com' },
    date: 'Jan 06, 2024',
    status: 'Pending',
    country: 'Singapur',
    total: '$ 1247.86',
  },
  {
    id: '#1523',
    client: { name: 'Mason Alexander', email: 'myinfo@alexander.com' },
    date: 'Jan 03, 2024',
    status: 'Delivered',
    country: 'United States',
    total: '$ 304.89',
  },
  {
    id: '#1522',
    client: { name: 'Samuel David', email: 'me@samueldavid.com' },
    date: 'Jan 01, 2024',
    status: 'Pending',
    country: 'Japan',
    total: '$ 2209.76',
  },
  {
    id: '#1521',
    client: { name: 'Henry Joseph', email: 'contact@henryjoseph.com' },
    date: 'Dec 28, 2023',
    status: 'Delivered',
    country: 'North Korea',
    total: '$ 5245.68',
  },
];

export default function EditableDataGrid() {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Order', flex: 1 },
    {
      field: 'client',
      headerName: 'Client',
      editable: true,
      flex: 2,
      resizable: false,
      renderHeader: () => (
        <Stack alignItems="center" gap={0.8}>
          <IconifyIcon
            icon="mingcute:user-2-fill"
            color="neutral.main"
            sx={(theme) => ({ fontSize: theme.typography.body2.fontSize })}
          />
          <Typography variant="subtitle2" mt={0.5} sx={{ letterSpacing: 1 }}>
            Client
          </Typography>
        </Stack>
      ),
      renderCell: (params) => {
        return (
          <Stack direction="column" alignSelf="center" justifyContent="center" sx={{ height: 1 }}>
            <Typography variant="subtitle1">{params.value.name}</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {params.value.email}
            </Typography>
          </Stack>
        );
      },
    },
    {
      field: 'date',
      headerName: 'Date',
      editable: true,
      flex: 1,
      resizable: false,
      renderHeader: () => (
        <Stack alignItems="center" gap={0.8}>
          <IconifyIcon
            icon="mdi:calendar"
            color="neutral.main"
            sx={(theme) => ({ fontSize: theme.typography.h6.fontSize })}
          />
          <Typography variant="subtitle2" mt={0.2} sx={{ letterSpacing: 1 }}>
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
      resizable: false,
      renderHeader: () => (
        <Stack alignItems="center" gap={0.8}>
          <IconifyIcon
            icon="carbon:checkbox-checked-filled"
            color="neutral.main"
            sx={(theme) => ({ fontSize: theme.typography.h6.fontSize })}
          />
          <Typography variant="subtitle2" mt={0.32} sx={{ letterSpacing: 1 }}>
            Status
          </Typography>
        </Stack>
      ),
      renderCell: (params) => {
        return (
          <Stack direction="column" alignSelf="center" justifyContent="center" sx={{ height: 1 }}>
            <StatusChip status={params.value} />
          </Stack>
        );
      },
    },
    {
      field: 'country',
      headerName: 'Country',
      sortable: false,
      flex: 1,
      resizable: false,
      renderHeader: () => (
        <Stack alignItems="center" gap={0.8}>
          <IconifyIcon
            icon="healthicons:geo-location"
            color="neutral.main"
            sx={(theme) => ({ fontSize: theme.typography.h5.fontSize })}
          />
          <Typography variant="subtitle2" mt={0.5} sx={{ letterSpacing: 1 }}>
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
      resizable: false,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      flex: 1,
      cellClassName: 'actions',
      resizable: false,
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<IconifyIcon color="primary.main" icon="mdi:content-save" sx={{fontSize: '1.2rem'}} />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<IconifyIcon color="text.disabled" icon="iconamoon:sign-times-duotone" sx={{fontSize: '1.2rem'}} />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<IconifyIcon icon="fluent:edit-32-filled" color="text.secondary" sx={{fontSize: '1.1rem'}} />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<IconifyIcon icon="mingcute:delete-3-fill" color="text.secondary" sx={{fontSize: '1.1rem'}} />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
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

      <Box mt={1.5} sx={{ height: 595, width: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={80}
          editMode="row"
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
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{
            pagination: DataGridFooter,
          }}
          slotProps={{
            toolbar: { setRows, setRowModesModel },
          }}
        />
      </Box>
    </Box>
  );
}
