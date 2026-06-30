import { Box, Typography } from '@mui/material';
import {
  DataGridPremium,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarQuickFilter,
  useGridApiRef,
} from '@mui/x-data-grid-premium';
import { getDataGridStyles } from 'utils/gridStyles';
import { useTheme } from '@mui/material/styles';

function CustomToolbar() {
  return (
    <GridToolbarContainer
      sx={{
        p: 1.25,
        gap: 1,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mr: 'auto' }}>
        Avg Item Per Order
      </Typography>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      <GridToolbarQuickFilter
        debounceMs={500}
        sx={{
          pb: 0,
          '& .MuiInputBase-root': { width: { xs: '100%', sm: 240 } },
        }}
      />
    </GridToolbarContainer>
  );
}
const rows = [
  {
    id: 1,
    region: 'USA',
    date1: 1.23,
    date2: 1.02,
    date3: 1.34,
    grand_total: 3.59,
  },
  {
    id: 2,
    region: 'UK',
    date1: 1.23,
    date2: 1.02,
    date3: 1.34,
    grand_total: 3.59,
  },
  {
    id: 3,
    region: 'CA',
    date1: 1.23,
    date2: 1.02,
    date3: 1.34,
    grand_total: 3.59,
  },
  {
    id: 4,
    region: 'DE',
    date1: 1.23,
    date2: 1.02,
    date3: 1.34,
    grand_total: 3.59,
  },
  {
    id: 5,
    region: 'IT',
    date1: 1.23,
    date2: 1.02,
    date3: 1.34,
    grand_total: 3.59,
  },
  {
    id: 6,
    region: 'FR',
    date1: 1.23,
    date2: 1.02,
    date3: 1.34,
    grand_total: 3.59,
  },
  {
    id: 7,
    region: 'IT',
    date1: 1.23,
    date2: 1.02,
    date3: 1.34,
    grand_total: 3.59,
  },
];

const sumField = (field) =>
  rows.reduce((acc, row) => acc + (Number(row[field]) || 0), 0);

const totalRow = {
  id: 'grand-total',
  region: 'Grand Total',
  date1: sumField('date1').toFixed(2),
  date2: sumField('date2').toFixed(2),
  date3: sumField('date3').toFixed(2),
  grand_total: sumField('grand_total').toFixed(2),
};

const columns = [
  {
    field: 'region',
    headerName: 'Region',
    groupable: true,
    flex: 1,
  },
  {
    field: 'date1',
    headerName: '4/26/2026',
    flex: 1,
  },
  {
    field: 'date2',
    headerName: '4/27/2026',
    groupable: true,
    flex: 1,
  },
  {
    field: 'date3',
    headerName: '4/28/2026',
    groupable: true,
    flex: 1,
  },
  {
    field: 'grand_total',
    headerName: 'Grand Total',
    groupable: true,
    flex: 1,
  },
];
const AvgItemOrderGrid = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 'calc(100vh - 200px)', md: 'calc(100vh - 230px)' },
        minHeight: '400px',
        px: { xs: 2, sm: 3 },
        pt: 2,
        pb: 1.5,
        border: '1px solid',
        borderColor: isDark ? '#1F2937' : '#E5E7EB',
        bgcolor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <DataGridPremium
        label="Avg Item Per Order"
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        pinnedRows={{ bottom: [totalRow] }}
        pagination
        pageSizeOptions={[10, 25, 50, 100]}
        sx={{
          ...getDataGridStyles(isDark, '100%'),
          '& .MuiDataGrid-row--pinned': {
            backgroundColor: isDark
              ? 'rgba(255, 255, 255, 0.06) !important'
              : 'rgba(0, 0, 0, 0.04) !important',
          },
          '& .MuiDataGrid-row--pinned .MuiDataGrid-cell': {
            fontWeight: 700,
            color: isDark ? '#ffffff' : '#101828',
          },
        }}
        showToolbar
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
}

export default AvgItemOrderGrid