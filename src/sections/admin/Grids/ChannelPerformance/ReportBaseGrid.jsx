import React from 'react';
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
    conversion_rate: 0.01,
    sales_in_gbp: 1049.81,
    achieved_sales: 1049.81,
  },
];

const columns = [
  {
    field: 'region',
    headerName: 'Region',
    groupable: true,
    flex: 1,
  },
  {
    field: 'channel_final',
    headerName: 'Channel final',
    flex: 1,
  },
  {
    field: 'sales_gbp',
    headerName: 'Sales GBP',
    groupable: true,
    flex: 1,
  },
  {
    field: 'grand_total',
    headerName: 'Grand Total',
    groupable: true,
    flex: 1,
  },
  {
    field: 'sales',
    headerName: 'Sales',
    groupable: true,
    flex: 1,
  },
  {
    field: 'sales_percentage',
    headerName: 'Sales Percentage',
    groupable: true,
    flex: 1,
  },
  {
    field: 'grand_total_percentage',
    headerName: 'Grand Total Percentage',
    groupable: true,
    flex: 1,
  },
  {
    field: 'conversion_rate',
    headerName: 'Conversion Rate',
    groupable: true,
    flex: 1,
  },
  {
    field: 'sales_in_gbp',
    headerName: 'Sales in GBP',
    groupable: true,
    flex: 1,
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
        height: { xs: 'calc(100vh - 200px)', md: 'calc(100vh - 130px)' },
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
        pagination
        pageSizeOptions={[10, 25, 50, 100]}
        sx={getDataGridStyles(isDark, '100%')}
        showToolbar
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
};

export default ReportBaseGrid;
