import React from 'react';
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
        Order Session
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
    region: 'Region 1',
    Orders: 100,
    Sessions: 100,
  },
  {
    id: 2,
    region: 'Region 2',
    Orders: 100,
    Sessions: 100,
  },
  {
    id: 3,
    region: 'Region 3',
    Orders: 100,
    Sessions: 100,
  },
  {
    id: 4,
    region: 'Region 4',
    Orders: 100,
    Sessions: 100,
  },
  {
    id: 5,
    region: 'Region 5',
    Orders: 100,
    Sessions: 100,
  },
  {
    id: 6,
    region: 'Region 6',
    Orders: 100,
    Sessions: 100,
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
    field: 'Orders',
    headerName: 'Orders',
    flex: 1,
  },
  {
    field: 'Sessions',
    headerName: 'Sessions',
    flex: 1,
  },
];

const OrderSessionGrid = () => {
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
        label="Order Session"
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        showToolbar
        pagination
        pageSizeOptions={[10, 25, 50, 100]}
        sx={getDataGridStyles(isDark, '100%')}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
};

export default OrderSessionGrid;
