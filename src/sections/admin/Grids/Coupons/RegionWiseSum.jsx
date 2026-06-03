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
        Region Wise Sum of applied discounts
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
  { id: 1, region: 'USA', sum_of_applied_discounts: '100' },
  { id: 2, region: 'UK', sum_of_applied_discounts: '200' },
  { id: 3, region: 'CA', sum_of_applied_discounts: '300' },
  { id: 4, region: 'DE', sum_of_applied_discounts: '400' },
  { id: 5, region: 'IT', sum_of_applied_discounts: '500' },
  { id: 6, region: 'FR', sum_of_applied_discounts: '600' },
  { id: 7, region: 'IT', sum_of_applied_discounts: '700' },
  { id: 8, region: 'IT', sum_of_applied_discounts: '800' },
  { id: 9, region: 'IT', sum_of_applied_discounts: '900' },
  { id: 10, region: 'IT', sum_of_applied_discounts: '1000' },
];
const columns = [
  { field: 'region', headerName: 'Region', flex: 1 },
  {
    field: 'sum_of_applied_discounts',
    headerName: 'Sum of Applied Discounts',
    flex: 1,
  },
];
const RegionWiseSum = () => {
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
        label="Region Wise Sum of applied discounts"
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

export default RegionWiseSum;
