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
const rows = [
  { id: 1, value: 'Sum of Pixel Sessions', date: '4/18/2026' },
  { id: 2, value: 'Sum of Session %age with add to cart', date: '4/19/2026' },
  { id: 3, value: 'Sum of Session %age with checkout start', date: '4/20/2026' },
  { id: 4, value: 'Sum of Session %age with checkout complete', date: '4/21/2026' },
  { id: 5, value: 'Sum of cvr', date: '4/22/2026' },
  { id: 6, value: 'Sum of Pixel Purchases', date: '4/23/2026' },
  { id: 7, value: 'Sum of Combined Gross Sales', date: '4/24/2026' },
];
const columns = [
  { field: 'value', headerName: 'Value', flex: 3 },
  { field: 'date', headerName: '4/18/2026', flex: 1 },
  { field: 'date', headerName: '4/19/2026', flex: 1 },
  { field: 'date', headerName: '4/20/2026', flex: 1 },
  { field: 'date', headerName: '4/21/2026', flex: 1 },
  { field: 'date', headerName: '4/22/2026', flex: 1 },
  { field: 'date', headerName: '4/23/2026', flex: 1 },
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

export default FunnelGrid