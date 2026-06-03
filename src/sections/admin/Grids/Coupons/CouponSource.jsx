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
        Coupon Source
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
  { id: 1, channel: 'Welcome', week: 'Week 1', month: 'Month 1', conversion_rate: '10%', discount_in_gbp: '100', sales_in_gbp: '100' },
  { id: 2, channel: 'Affiliate', week: 'Week 2', month: 'Month 2', conversion_rate: '11%', discount_in_gbp: '200', sales_in_gbp: '200' },
  { id: 3, channel: 'Bundle', week: 'Week 3', month: 'Month 3', conversion_rate: '12%', discount_in_gbp: '300', sales_in_gbp: '300' },
  { id: 4, channel: 'Email', week: 'Week 4', month: 'Month 4', conversion_rate: '13%', discount_in_gbp: '400', sales_in_gbp: '400' },
  { id: 5, channel: 'Free Sample', week: 'Week 5', month: 'Month 5', conversion_rate: '14%', discount_in_gbp: '500', sales_in_gbp: '500' },
  { id: 6, channel: 'Social', week: 'Week 6', month: 'Month 6', conversion_rate: '15%', discount_in_gbp: '600', sales_in_gbp: '600' },
  { id: 7, channel: 'ONWARDS', week: 'Week 7', month: 'Month 7', conversion_rate: '16%', discount_in_gbp: '700', sales_in_gbp: '700' },
  { id: 8, channel: 'AE Website Launch', week: 'Week 8', month: 'Month 8', conversion_rate: '17%', discount_in_gbp: '800', sales_in_gbp: '800' },
  { id: 9, channel: 'USA2024', week: 'Week 9', month: 'Month 9', conversion_rate: '18%', discount_in_gbp: '900', sales_in_gbp: '900' },
  { id: 10, channel: 'Website Development', week: 'Week 10', month: 'Month 10', conversion_rate: '19%', discount_in_gbp: '1000', sales_in_gbp: '1000' },
];
const columns = [
  { field: 'channel', headerName: 'Channel', flex: 1 },
  { field: 'week', headerName: 'Week', flex: 1 },
  { field: 'month', headerName: 'Month', flex: 1 },
  { field: 'conversion_rate', headerName: 'Conversion Rate', flex: 1 },
  { field: 'discount_in_gbp', headerName: 'Discount in GBP', flex: 1 },
  { field: 'sales_in_gbp', headerName: 'Sales in GBP', flex: 1 },
];
const CouponSource = () => {
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
        label="Coupon Source"
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

export default CouponSource;
