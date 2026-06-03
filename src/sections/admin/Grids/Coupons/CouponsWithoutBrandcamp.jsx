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
        Coupons Without Brandcamp Cost
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
  { id: 1, channels: 'Welcome', total_orders: 1201, sum_of_discount_in_gbp: -4960, sales: "49,726", discount_rate: '-10%', grand_total: "44,766" },
  { id: 2, channels: 'Affiliate', total_orders: 357, sum_of_discount_in_gbp: -1710, sales: "17,100", discount_rate: '-11%', grand_total: "15,390" },
  { id: 3, channels: 'Bundle', total_orders: 3153, sum_of_discount_in_gbp: -12080, sales: "120,800", discount_rate: '-7%', grand_total: "113,720" },
  { id: 4, channels: 'Email', total_orders: 235, sum_of_discount_in_gbp: -960, sales: "9,600", discount_rate: '-10%', grand_total: "8,640" },
  { id: 5, channels: 'Free Sample', total_orders: 213, sum_of_discount_in_gbp: -860, sales: "8,600", discount_rate: '-13%', grand_total: "7,740" },
  { id: 6, channels: 'Social', total_orders: 198, sum_of_discount_in_gbp: -760, sales: "7,600", discount_rate: '-100%', grand_total: "3,411" },
  { id: 7, channels: 'ONWARDS', total_orders: 173, sum_of_discount_in_gbp: -660, sales: "6,600", discount_rate: '-14%', grand_total: "5,640" },
  { id: 8, channels: 'AE Website Launch', total_orders: 160, sum_of_discount_in_gbp: -600, sales: "6,000", discount_rate: '-10%', grand_total: "5,400" },
  { id: 9, channels: 'USA2024', total_orders: 140, sum_of_discount_in_gbp: -500, sales: "5,000", discount_rate: '-12%', grand_total: "4,500" },
  { id: 10, channels: 'Website Development', total_orders: 35, sum_of_discount_in_gbp: -200, sales: "2,000", discount_rate: '-10%', grand_total: "1,800" },
];
const columns = [
  { field: 'channels', headerName: 'Channels', flex: 1 },
  { field: 'total_orders', headerName: 'Total Orders', flex: 1 },
  { field: 'sum_of_discount_in_gbp', headerName: 'Sum of Discount in GBP', flex: 1 },
  { field: 'sales', headerName: 'Sales', flex: 1 },
  { field: 'discount_rate', headerName: 'Discount Rate', flex: 1 },
  { field: 'grand_total', headerName: 'Grand Total', flex: 1 },
];
const CouponsWithoutBrandcamp = () => {
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
        label="Coupons Without Brandcamp Cost"
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
}

export default CouponsWithoutBrandcamp