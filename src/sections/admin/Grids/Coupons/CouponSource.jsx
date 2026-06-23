import React, { useState, useCallback } from 'react';
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
  {
    id: 1,
    coupons: '10106',
    channels: 'Affiliate',
  },
  {
    id: 2,
    coupons: '10GOSU',
    channels: 'Affiliate',
  },
  {
    id: 3,
    coupons: '2CFXNDF5',
    channels: 'Early Bird',
  },
  {
    id: 4,
    coupons: '2JGFBW9D',
    channels: 'Early bird',
  },
  {
    id: 5,
    coupons: '3T7LJP79',
    channels: 'Email',
  },
  {
    id: 6,
    coupons: '10WOSI',
    channels: 'Affiliate',
  },
  {
    id: 7,
    coupons: '4N75T9R2',
    channels: 'Affiliate',
  },
  {
    id: 8,
    coupons: '5TP9XC7H',
    channels: 'ALONSO10',
  },
  {
    id: 9,
    coupons: 'bfcmbrowse3WJS2GKH',
    channels: 'BFCM',
  },
  {
    id: 10,
    coupons: 'CAMPOS10',
    channels: 'CAMPOS10',
  },
];
const columns = [
  { field: 'coupons', headerName: 'Coupons', flex: 1 },
  { field: 'channels', headerName: 'Channel', flex: 1, editable: true },
];
const CouponSource = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [rowsData, setRowsData] = useState(rows)
  const processRowUpdate = useCallback((newRow) => {
    setRowsData((prevRows) =>
      prevRows.map((row) => (row.id === newRow.id ? newRow : row)),
    );
    return newRow;
  }, [])
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
        rows={rowsData}
        columns={columns}
        processRowUpdate={processRowUpdate}
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
