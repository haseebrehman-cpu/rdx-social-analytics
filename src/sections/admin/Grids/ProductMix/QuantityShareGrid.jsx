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
        Quantity Share
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
    category: 'Activewear',
    date1: '2.63%',
    date2: '4.25%',
    date3: '3.45%',
    grand_total: '10.33%',
  },
  {
    id: 2,
    category: 'Bottoms',
    date1: '1.23%',
    date2: '0.87%',
    date3: '1.56%',
    grand_total: '3.66%',
  },
  {
    id: 3,
    category: 'Weight Lifting Belts',
    date1: '0.98%',
    date2: '0.76%',
    date3: '1.23%',
    grand_total: '3.97%',
  },
  {
    id: 4,
    category: 'MMA Shin Guards',
    date1: '0.87%',
    date2: '1.02%',
    date3: '1.34%',
    grand_total: '3.36%',
  },
  {
    id: 5,
    category: 'Shorts',
    date1: '1.23%',
    date2: '1.02%',
    date3: '1.34%',
    grand_total: '3.59%',
  },
  {
    id: 6,
    category: 'Tank Tops',
    date1: '1.02%',
    date2: '1.34%',
    date3: '1.56%',
    grand_total: '3.92%',
  },
  {
    id: 7,
    category: 'Punching & Training Bags',
    date1: '1.23%',
    date2: '1.02%',
    date3: '1.34%',
    grand_total: '3.59%',
  },
];

const columns = [
  {
    field: 'category',
    headerName: 'Category',
    groupable: true,
    flex: 1,
  },
  {
    field: 'date1',
    headerName: '4/26/2026',
    flex: 1,
  },
  {
    field: 'date2',
    headerName: '4/27/2026',
    groupable: true,
    flex: 1,
  },
  {
    field: 'date3',
    headerName: '4/28/2026',
    groupable: true,
    flex: 1,
  },
  {
    field: 'grand_total',
    headerName: 'Grand Total',
    groupable: true,
    flex: 1,
  },
];
const QuantityShareGrid = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 'calc(100vh - 200px)', md: 'calc(100vh - 140px)' },
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
        label="Quantity Share"
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

export default QuantityShareGrid