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
const rows = [
  { id: 1, value: 'Klaviyo', date: '4/25/2026', grandTotal: '100', average: '100', difference: '100', growth: '100' },
  { id: 2, value: 'Direct', date: '4/26/2026', grandTotal: '100', average: '100', difference: '100', growth: '100' },
  { id: 3, value: 'Influencers', date: '4/27/2026', grandTotal: '100', average: '100', difference: '100', growth: '100' },
  { id: 4, value: 'chatgpt.com', date: '4/28/2026', grandTotal: '100', average: '100', difference: '100', growth: '100' },
  { id: 5, value: 'shop_app', date: '4/29/2026', grandTotal: '100', average: '100', difference: '100', growth: '100' },
  { id: 6, value: 'Meta', date: '4/30/2026', grandTotal: '100', average: '100', difference: '100', growth: '100' },
  { id: 7, value: 'livechat.com', date: '5/01/2026', grandTotal: '100', average: '100', difference: '100', growth: '100' },
  { id: 8, value: 'affiliate', date: '5/02/2026', grandTotal: '100', average: '100', difference: '100', growth: '100' },

];
const columns = [
  { field: 'value', headerName: 'Value', flex: 3 },
  { field: 'date', headerName: '4/25/2026', flex: 3 },
  { field: 'date', headerName: '4/26/2026', flex: 3 },
  { field: 'date', headerName: '4/27/2026', flex: 3 },
  { field: 'date', headerName: '4/28/2026', flex: 3 },
  { field: 'date', headerName: '4/29/2026', flex: 3 },
  { field: 'date', headerName: '4/30/2026', flex: 3 },
  { field: 'date', headerName: '5/01/2026', flex: 3 },
  { field: 'date', headerName: '5/02/2026', flex: 3 },
  { field: 'grandTotal', headerName: 'Grand Total', flex: 4 },
  { field: 'average', headerName: 'Average', flex: 3 },
  { field: 'difference', headerName: 'Difference', flex: 4 },
  { field: 'growth', headerName: 'Growth', flex: 4 },
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

export default SourceWiseSale;
