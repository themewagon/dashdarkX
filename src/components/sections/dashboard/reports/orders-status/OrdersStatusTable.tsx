import { useState } from 'react';
import { format } from 'date-fns';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import StatusChip from 'components/chips/StatusChip';
import IconifyIcon from 'components/base/IconifyIcon';
import DataGridFooter from 'components/data-grid/DataGridFooter';

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

const initialRows: GridRowsProp = [
  {
    id: '#1532',
    client: { name: 'John Carter', email: 'hello@johncarter.com' },
    date: new Date('Jan 30, 2024'),
    status: 'delivered',
    country: 'United States',
    total: '$ 1,099.24',
  },
  {
    id: '#1531',
    client: { name: 'Sophie Moore', email: 'contact@sophiemoore.com' },
    date: new Date('Jan 27, 2024'),
    status: 'canceled',
    country: 'United Kingdom',
    total: '$ 5,870.32',
  },
  {
    id: '#1530',
    client: { name: 'Matt Cannon', email: 'info@mattcannon.com' },
    date: new Date('Jan 24, 2024'),
    status: 'delivered',
    country: 'Australia',
    total: '$ 13,899.48',
  },
  {
    id: '#1529',
    client: { name: 'Graham Hills', email: 'hi@grahamhills.com' },
    date: new Date('Jan 21, 2024'),
    status: 'pending',
    country: 'India',
    total: '$ 1,569.12',
  },
  {
    id: '#1528',
    client: { name: 'Sandy Houston', email: 'contact@sandyhouston.com' },
    date: new Date('Jan 18, 2024'),
    status: 'delivered',
    country: 'Canada',
    total: '$ 899.16',
  },
  {
    id: '#1527',
    client: { name: 'Andy Smith', email: 'hello@andysmith.com' },
    date: new Date('Jan 15, 2024'),
    status: 'pending',
    country: 'United States',
    total: '$ 2,449.64',
  },
  {
    id: '#1526',
    client: { name: 'Emma Grace', email: 'wow@emmagrace.com' },
    date: new Date('Jan 12, 2024'),
    status: 'delivered',
    country: 'Australia',
    total: '$ 6729.82',
  },
  {
    id: '#1525',
    client: { name: 'Ava Rose', email: 'me@avarose.com' },
    date: new Date('Jan 09, 2024'),
    status: 'canceled',
    country: 'Canada',
    total: '$ 784.94',
  },
  {
    id: '#1524',
    client: { name: 'Olivia Jane', email: 'info@oliviajane.com' },
    date: new Date('Jan 06, 2024'),
    status: 'pending',
    country: 'Singapur',
    total: '$ 1247.86',
  },
  {
    id: '#1523',
    client: { name: 'Mason Alexander', email: 'myinfo@alexander.com' },
    date: new Date('Jan 03, 2024'),
    status: 'delivered',
    country: 'United States',
    total: '$ 304.89',
  },
  {
    id: '#1522',
    client: { name: 'Samuel David', email: 'me@samueldavid.com' },
    date: new Date('Jan 01, 2024'),
    status: 'pending',
    country: 'Japan',
    total: '$ 2209.76',
  },
  {
    id: '#1521',
    client: { name: 'Henry Joseph', email: 'contact@henryjoseph.com' },
    date: new Date('Dec 28, 2023'),
    status: 'delivered',
    country: 'North Korea',
    total: '$ 5245.68',
  },
];

const OrdersStatusTable = () => {
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
    {
      field: 'id',
      headerName: 'Order',
      flex: 1,
      resizable: false,
    },
    {
      field: 'client',
      headerName: 'Client',
      flex: 2,
      resizable: false,
      renderHeader: () => (
        <Stack alignItems="center" gap={0.75}>
          <IconifyIcon
            icon="mingcute:user-2-fill"
            color="neutral.main"
            sx={(theme) => ({ fontSize: theme.typography.body2.fontSize })}
          />
          <Typography variant="caption" mt={0.25} sx={{ letterSpacing: 0.5 }}>
            Client
          </Typography>
        </Stack>
      ),
      renderCell: (params) => {
        return (
          <Stack direction="column" alignSelf="center" justifyContent="center" sx={{ height: 1 }}>
            <Typography
              variant="subtitle1"
              sx={(theme) => ({ fontSize: theme.typography.caption.fontSize })}
            >
              {params.value.name}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={(theme) => ({ fontSize: theme.typography.caption.fontSize })}
              color="text.secondary"
            >
              {params.value.email}
            </Typography>
          </Stack>
        );
      },
      sortComparator: (v1, v2) => v1.name.localeCompare(v2.name),
    },
    {
      field: 'date',
      type: 'date',
      headerName: 'Date',
      editable: true,
      flex: 1,
      resizable: false,
      renderHeader: () => (
        <Stack alignItems="center" gap={0.75}>
          <IconifyIcon
            icon="mdi:calendar"
            color="neutral.main"
            sx={(theme) => ({ fontSize: theme.typography.body1.fontSize })}
          />
          <Typography mt={0.175} variant="caption" sx={{ letterSpacing: 0.5 }}>
            Date
          </Typography>
        </Stack>
      ),
      renderCell: (params) => format(new Date(params.value), 'MMM dd, yyyy'),
    },
    {
      field: 'status',
      headerName: 'Status',
      sortable: false,
      flex: 1,
      resizable: false,
      renderHeader: () => (
        <Stack alignItems="center" gap={0.875}>
          <IconifyIcon
            icon="carbon:checkbox-checked-filled"
            color="neutral.main"
            sx={(theme) => ({ fontSize: theme.typography.body1.fontSize })}
          />
          <Typography mt={0.175} variant="caption" sx={{ letterSpacing: 0.5 }}>
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
      editable: true,
      renderHeader: () => (
        <Stack alignItems="center" gap={0.75}>
          <IconifyIcon
            icon="healthicons:geo-location"
            color="neutral.main"
            sx={(theme) => ({ fontSize: theme.typography.h5.fontSize })}
          />
          <Typography mt={0.175} variant="caption" sx={{ letterSpacing: 0.5 }}>
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
      editable: true,
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
              icon={
                <IconifyIcon
                  color="primary.main"
                  icon="mdi:content-save"
                  sx={(theme) => ({
                    fontSize: theme.typography.body1.fontSize,
                    pointerEvents: 'none',
                  })}
                />
              }
              label="Save"
              onClick={handleSaveClick(id)}
              size="small"
            />,
            <GridActionsCellItem
              icon={
                <IconifyIcon
                  color="text.secondary"
                  icon="iconamoon:sign-times-duotone"
                  sx={(theme) => ({
                    fontSize: theme.typography.h6.fontSize,
                    pointerEvents: 'none',
                  })}
                />
              }
              label="Cancel"
              onClick={handleCancelClick(id)}
              size="small"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={
              <IconifyIcon
                icon="fluent:edit-32-filled"
                color="text.secondary"
                sx={(theme) => ({
                  fontSize: theme.typography.body1.fontSize,
                  pointerEvents: 'none',
                })}
              />
            }
            label="Edit"
            onClick={handleEditClick(id)}
            size="small"
          />,
          <GridActionsCellItem
            onClick={handleDeleteClick(id)}
            label="Delete"
            icon={
              <IconifyIcon
                icon="mingcute:delete-3-fill"
                color="text.secondary"
                sx={(theme) => ({
                  fontSize: theme.typography.body1.fontSize,
                  pointerEvents: 'none',
                })}
              />
            }
            size="small"
          />,
        ];
      },
    },
  ];

  return (
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
      checkboxSelection
      pageSizeOptions={[6]}
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
  );
};

export default OrdersStatusTable;
