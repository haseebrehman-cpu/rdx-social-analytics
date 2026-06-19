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
        Region Wise Gross Sale
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
    region: 'USA',
    date1: 213,
    date2: 389,
    date3: 346,
    grand_total: 948,
  },
  {
    id: 2,
    region: 'UK',
    date1: 121,
    date2: 187,
    date3: 156,
    grand_total: 464,
  },
  {
    id: 3,
    region: 'CA',
    date1: 1612,
    date2: 133,
    date3: 1120,
    grand_total: 3045,
  },
  {
    id: 4,
    region: 'DE',
    date1: 4705,
    date2: 4049,
    date3: 53,
    grand_total: 9288,
  },
  {
    id: 5,
    region: 'IT',
    date1: 123,
    date2: 102,
    date3: 112,
    grand_total: 337,
  },
  {
    id: 6,
    region: 'FR',
    date1: 123,
    date2: 102,
    date3: 112,
    grand_total: 337,
  },
  {
    id: 7,
    region: 'IT',
    date1: 123,
    date2: 102,
    date3: 112,
    grand_total: 337,
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
const RegionWiseGrid = () => {
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
        label="Region Wise Gross Sale"
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

export default RegionWiseGrid;
