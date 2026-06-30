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
        Source Wise Sale
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
  { field: 'apr25', headerName: '4/25/2026' },
  { field: 'apr26', headerName: '4/26/2026' },
  { field: 'apr27', headerName: '4/27/2026' },
  { field: 'apr28', headerName: '4/28/2026' },
  { field: 'apr29', headerName: '4/29/2026' },
  { field: 'apr30', headerName: '4/30/2026' },
  { field: 'may01', headerName: '5/01/2026' },
  { field: 'may02', headerName: '5/02/2026' },
];

const VALUE_FIELDS = DATE_COLUMNS.map((col) => col.field);

const NUMERIC_FIELDS = [
  ...VALUE_FIELDS,
  'grandTotal',
  'average',
  'difference',
  'growth',
];

const parseValue = (value) => Number(value) || 0;

const formatNumber = (value) =>
  new Intl.NumberFormat('en-US').format(Math.round(parseValue(value)));

const sumField = (data, field) =>
  data.reduce((acc, row) => acc + parseValue(row[field]), 0);

const sumValueFields = (row) =>
  VALUE_FIELDS.reduce((acc, field) => acc + parseValue(row[field]), 0);

const rawRows = [
  {
    id: 1,
    value: 'Klaviyo',
    apr25: 234,
    apr26: 433,
    apr27: 144,
    apr28: 256,
    apr29: 653,
    apr30: 333,
    may01: 223,
    may02: 441,
    difference: 100,
    growth: 100,
  },
  {
    id: 2,
    value: 'Direct',
    apr25: 433,
    apr26: 433,
    apr27: 144,
    apr28: 256,
    apr29: 653,
    apr30: 333,
    may01: 223,
    may02: 441,
    difference: 100,
    growth: 100,
  },
  {
    id: 3,
    value: 'Influencers',
    apr25: 144,
    apr26: 433,
    apr27: 144,
    apr28: 256,
    apr29: 653,
    apr30: 333,
    may01: 223,
    may02: 441,
    difference: 100,
    growth: 100,
  },
  {
    id: 4,
    value: 'chatgpt.com',
    apr25: 256,
    apr26: 433,
    apr27: 144,
    apr28: 256,
    apr29: 653,
    apr30: 333,
    may01: 223,
    may02: 441,
    difference: 100,
    growth: 100,
  },
  {
    id: 5,
    value: 'shop_app',
    apr25: 653,
    apr26: 433,
    apr27: 144,
    apr28: 256,
    apr29: 653,
    apr30: 333,
    may01: 223,
    may02: 441,
    difference: 100,
    growth: 100,
  },
  {
    id: 6,
    value: 'Meta',
    apr25: 333,
    apr26: 433,
    apr27: 144,
    apr28: 256,
    apr29: 653,
    apr30: 333,
    may01: 223,
    may02: 441,
    difference: 100,
    growth: 100,
  },
  {
    id: 7,
    value: 'livechat.com',
    apr25: 223,
    apr26: 433,
    apr27: 144,
    apr28: 256,
    apr29: 653,
    apr30: 333,
    may01: 223,
    may02: 441,
    difference: 100,
    growth: 100,
  },
  {
    id: 8,
    value: 'affiliate',
    apr25: 441,
    apr26: 433,
    apr27: 144,
    apr28: 256,
    apr29: 653,
    apr30: 333,
    may01: 223,
    may02: 441,
    difference: 100,
    growth: 100,
  },
];

const rows = rawRows.map((row) => {
  const grandTotal = sumValueFields(row);
  return {
    ...row,
    grandTotal,
    average: Math.round(grandTotal / VALUE_FIELDS.length),
  };
});

const totalRow = {
  id: 'grand-total',
  value: 'Grand Total',
  ...Object.fromEntries(
    NUMERIC_FIELDS.map((field) => [field, sumField(rows, field)]),
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
  ...DATE_COLUMNS.map((col) => numericColumn(col.field, col.headerName, 3)),
  numericColumn('grandTotal', 'Grand Total', 4),
  numericColumn('average', 'Average', 3),
  numericColumn('difference', 'Difference', 4),
  numericColumn('growth', 'Growth', 4),
];

const SourceWiseSale = () => {
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
        label="Source Wise Sale"
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

export default SourceWiseSale;
