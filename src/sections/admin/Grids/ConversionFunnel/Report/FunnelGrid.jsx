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
        Conversion Funnel
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

const DATE_COLUMNS = [
  { field: 'apr18', headerName: '4/18/2026' },
  { field: 'apr19', headerName: '4/19/2026' },
  { field: 'apr20', headerName: '4/20/2026' },
  { field: 'apr21', headerName: '4/21/2026' },
  { field: 'apr22', headerName: '4/22/2026' },
  { field: 'apr23', headerName: '4/23/2026' },
  { field: 'apr24', headerName: '4/24/2026' },
];

const VALUE_FIELDS = DATE_COLUMNS.map((col) => col.field);

const parseValue = (value) => Number(value) || 0;

const formatNumber = (value) =>
  new Intl.NumberFormat('en-US').format(Math.round(parseValue(value)));

const sumField = (data, field) =>
  data.reduce((acc, row) => acc + parseValue(row[field]), 0);

const rows = [
  {
    id: 1,
    value: 'Sum of Pixel Sessions',
    apr18: 1250,
    apr19: 1180,
    apr20: 1320,
    apr21: 1410,
    apr22: 1290,
    apr23: 1350,
    apr24: 1400,
  },
  {
    id: 2,
    value: 'Sum of Session %age with add to cart',
    apr18: 42,
    apr19: 45,
    apr20: 41,
    apr21: 44,
    apr22: 43,
    apr23: 46,
    apr24: 45,
  },
  {
    id: 3,
    value: 'Sum of Session %age with checkout start',
    apr18: 28,
    apr19: 30,
    apr20: 27,
    apr21: 29,
    apr22: 28,
    apr23: 31,
    apr24: 30,
  },
  {
    id: 4,
    value: 'Sum of Session %age with checkout complete',
    apr18: 22,
    apr19: 24,
    apr20: 21,
    apr21: 23,
    apr22: 22,
    apr23: 25,
    apr24: 24,
  },
  {
    id: 5,
    value: 'Sum of cvr',
    apr18: 3.2,
    apr19: 3.5,
    apr20: 3.1,
    apr21: 3.4,
    apr22: 3.3,
    apr23: 3.6,
    apr24: 3.5,
  },
  {
    id: 6,
    value: 'Sum of Pixel Purchases',
    apr18: 320,
    apr19: 305,
    apr20: 335,
    apr21: 348,
    apr22: 312,
    apr23: 340,
    apr24: 355,
  },
  {
    id: 7,
    value: 'Sum of Combined Gross Sales',
    apr18: 18500,
    apr19: 17200,
    apr20: 19800,
    apr21: 20400,
    apr22: 19100,
    apr23: 20100,
    apr24: 21000,
  },
];

const totalRow = {
  id: 'grand-total',
  value: 'Grand Total',
  ...Object.fromEntries(
    VALUE_FIELDS.map((field) => [field, sumField(rows, field)]),
  ),
};

const numericColumn = (field, headerName, flex) => ({
  field,
  headerName,
  flex,
  type: 'number',
  valueFormatter: (value) => formatNumber(value),
});

const columns = [
  { field: 'value', headerName: 'Value', flex: 3 },
  ...DATE_COLUMNS.map((col) => numericColumn(col.field, col.headerName, 1)),
];

const FunnelGrid = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 0,
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
        label="Conversion Funnel"
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
};

export default FunnelGrid;
