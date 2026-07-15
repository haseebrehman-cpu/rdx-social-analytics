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
        Report Base
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

const renderMultiLineHeader = (line1, line2, isDark) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      lineHeight: 1.2,
    }}
  >
    <span
      style={{
        fontWeight: 600,
        fontSize: '0.875rem',
        color: isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgb(31 41 55)',
        textAlign: 'center',
      }}
    >
      {line1}
    </span>
    {line2 && (
      <span
        style={{
          fontSize: '0.75rem',
          color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgb(107 114 128)',
          textAlign: 'center',
        }}
      >
        {line2}
      </span>
    )}
  </div>
);

const MultiLineHeader = ({ line1, line2 }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return renderMultiLineHeader(line1, line2, isDark);
};

const rows = [
  {
    id: 1,
    region: 'CA',
    channel_final: 'Affiliate',
    sales_gbp: 79.251,
    grand_total: 105.116,
    sales: 63,
    sales_percentage: 79.2,
    grand_total_percentage: 75.4,
    currency_sales: 1000,
    conversion_rate: 0.01,
    sales_in_gbp: 79.251,
    achieved_sales: 79.251,
  },
  {
    id: 2,
    region: 'CA',
    channel_final: 'Email',
    sales_gbp: 853.433,
    grand_total: 1142.61,
    sales: 86,
    sales_percentage: 74.7,
    grand_total_percentage: 74.7,
    currency_sales: 1000,
    conversion_rate: 0.01,
    sales_in_gbp: 853.43,
    achieved_sales: 853.43,
  },
  {
    id: 3,
    region: 'CA',
    channel_final: 'Organic',
    sales_gbp: 1049.466,
    grand_total: 1399.288,
    sales: 92,
    sales_percentage: 74.9,
    grand_total_percentage: 75.0,
    currency_sales: 1000,
    conversion_rate: 0.01,
    sales_in_gbp: 1049.46,
    achieved_sales: 1049.46,
  },
  {
    id: 4,
    region: 'CA',
    channel_final: 'Paid',
    sales_gbp: 1049.818,
    grand_total: 1399.757,
    sales: 92,
    sales_percentage: 74.9,
    grand_total_percentage: 75.0,
    currency_sales: 1000,
    conversion_rate: 0.01,
    sales_in_gbp: 1049.81,
    achieved_sales: 1049.81,
  },
];

const sumField = (field) =>
  rows.reduce((acc, row) => acc + (Number(row[field]) || 0), 0);

const totalRow = {
  id: 'grand-total',
  region: 'Grand Total',
  channel_final: '',
  sales_gbp: sumField('sales_gbp'),
  grand_total: sumField('grand_total'),
  sales: sumField('sales').toFixed(2),
  sales_percentage: sumField('sales_percentage').toFixed(2),
  grand_total_percentage: sumField('grand_total_percentage').toFixed(2),
  currency_sales: sumField('currency_sales'),
  conversion_rate: sumField('conversion_rate').toFixed(2),
  sales_in_gbp: sumField('sales_in_gbp').toFixed(2),
  achieved_sales: sumField('achieved_sales').toFixed(2),
};

const columns = [
  {
    field: 'region',
    headerName: 'Region',
    groupable: true,
    width: 80,
  },
  {
    field: 'channel_final',
    headerName: 'Channel final',
    width: 140,
  },
  {
    field: 'sales_gbp',
    headerName: 'Sales GBP',
    groupable: true,
    width: 100,
  },
  {
    field: 'grand_total',
    headerName: 'Grand Total',
    groupable: true,
    width: 120,
  },
  {
    field: 'sales',
    headerName: 'Sales',
    groupable: true,
    renderHeader: () => (
      <MultiLineHeader line1="Sales" line2="Sales GBP / Grand Total" />
    ),
    width: 140,
  },
  {
    field: 'sales_percentage',
    headerName: 'Sales Percentage',
    groupable: true,
    width: 160,
  },
  {
    field: 'grand_total_percentage',
    headerName: 'Grand Total Percentage',
    groupable: true,
    width: 210,
  },
  {
    field: 'currency_sales',
    headerName: 'Currency Sales',
    groupable: true,
    width: 290,
    align: 'center',
    renderHeader: () => (
      <MultiLineHeader
        line1="Currency Sales"
        line2="NET SALES + Shipping Charges + DIscounts + Returns"
      />
    ),
  },
  {
    field: 'conversion_rate',
    headerName: 'Conversion Rate',
    groupable: true,
    width: 150,
  },
  {
    field: 'sales_in_gbp',
    headerName: 'Sales in GBP',
    groupable: true,
    flex: 1,
    renderHeader: () => (
      <MultiLineHeader
        line1="Sales in GBP"
        line2="Currency Sales / Conversion Rate"
      />
    ),
  },
  {
    field: 'achieved_sales',
    headerName: 'Achieved Sales',
    groupable: true,
    flex: 1,
  },
];
const ReportBaseGrid = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 'calc(100vh - 200px)', md: 'calc(100vh - 240px)' },
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
        label="Report Base"
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

export default ReportBaseGrid;
