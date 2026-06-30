import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
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
        Channel Wise Sales
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
    date: new Date('2026-04-12'),
    sum_of_add_spend: 100,
    total_roas: 1.0,
    traffic: 100,
    cal_cvr: 1.0,
    sum_of_aov: 100,
    orders: 100,
    sales: 100,
    channel_total_sales: 100,
    day_wise_sales: 100,
    region_wise_sales: 100,
  },
  {
    id: 2,
    date: new Date('2026-04-18'),
    sum_of_add_spend: 100,
    total_roas: 1.0,
    traffic: 100,
    cal_cvr: 1.0,
    sum_of_aov: 100,
    orders: 100,
    sales: 100,
    channel_total_sales: 100,
    day_wise_sales: 100,
    region_wise_sales: 100,
  },
  {
    id: 3,
    date: new Date('2026-04-22'),
    sum_of_add_spend: 100,
    sum_of_aov: 100,
    total_roas: 1.0,
    traffic: 100,
    cal_cvr: 1.0,
    orders: 100,
    sales: 100,
    channel_total_sales: 100,
    day_wise_sales: 100,
    region_wise_sales: 100,
  },
  {
    id: 4,
    date: new Date('2026-04-28'),
    sum_of_add_spend: 100,
    sum_of_aov: 100,
    total_roas: 1.0,
    traffic: 100,
    cal_cvr: 1.0,
    orders: 100,
    sales: 100,
    channel_total_sales: 100,
    day_wise_sales: 100,
    region_wise_sales: 100,
  },
  {
    id: 5,
    date: new Date('2026-05-04'),
    sum_of_add_spend: 100,
    sum_of_aov: 100,
    total_roas: 1.0,
    traffic: 100,
    cal_cvr: 1.0,
    orders: 100,
    sales: 100,
    channel_total_sales: 100,
    day_wise_sales: 100,
    region_wise_sales: 100,
  },
  {
    id: 6,
    date: new Date('2026-05-08'),
    sum_of_add_spend: 100,
    sum_of_aov: 100,
    total_roas: 1.0,
    traffic: 100,
    cal_cvr: 1.0,
    orders: 100,
    sales: 100,
    channel_total_sales: 100,
    day_wise_sales: 100,
    region_wise_sales: 100,
  },
];

const sumField = (field) =>
  rows.reduce((acc, row) => acc + (Number(row[field]) || 0), 0);

const totalRow = {
  id: 'grand-total',
  date: null,
  sum_of_add_spend: sumField('sum_of_add_spend'),
  total_roas: sumField('total_roas'),
  traffic: sumField('traffic'),
  cal_cvr: sumField('cal_cvr'),
  sum_of_aov: sumField('sum_of_aov'),
  orders: sumField('orders'),
  sales: sumField('sales'),
  channel_total_sales: sumField('channel_total_sales'),
  day_wise_sales: sumField('day_wise_sales'),
  region_wise_sales: sumField('region_wise_sales'),
};

const columns = [
  {
    field: 'date',
    headerName: 'Date',
    type: 'date',
    groupable: true,
    flex: 1,
    renderCell: (params) =>
      params.row.id === 'grand-total' ? 'Grand Total' : params.formattedValue,
  },
  {
    field: 'sum_of_add_spend',
    headerName: 'Sum of Add Spend',
    flex: 1,
  },
  {
    field: 'total_roas',
    headerName: 'Total ROAS',
    flex: 1,
  },
  {
    field: 'traffic',
    headerName: 'Traffic',
    groupable: true,
    flex: 1,
  },
  {
    field: 'cal_cvr',
    headerName: 'Cal CVR',
    flex: 1,
  },
  {
    field: 'sum_of_aov',
    headerName: 'Sum of AOV',
    flex: 1,
  },
  {
    field: 'orders',
    headerName: 'Orders',
    flex: 1,
  },
  {
    field: 'sales',
    headerName: 'Sales',
    flex: 1,
  },
  {
    field: 'channel_total_sales',
    headerName: 'Channel Total Sales',
    flex: 1,
  },
  {
    field: 'day_wise_sales',
    headerName: 'Day Wise Sales',
    flex: 1,
  },
  {
    field: 'region_wise_sales',
    headerName: 'Region Wise Sales',
    flex: 1,
  },
];

const ChannelWiseSales = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        // height: { xs: 'calc(100vh - 200px)', md: 'calc(100vh - 140px)' },
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
        label="Channel Wise Sales"
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        pinnedRows={{ bottom: [totalRow] }}
        showToolbar
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
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
};

export default ChannelWiseSales;
