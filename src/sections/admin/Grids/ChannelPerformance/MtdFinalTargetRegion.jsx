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
        MTD Target Vs Achieved by Region
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

const formatNumber = (value) =>
  value == null ? '' : new Intl.NumberFormat('en-US').format(value);

const formatPercent = (value) =>
  value == null ? '' : `${Number(value).toFixed(2)}%`;

const rows = [
  {
    id: 1,
    region: 'UK',
    sum_of_target: 1000,
    sum_of_achieved: 1000,
    achieved_percentage: 1000,
    time_gone: 1000,
    current_rr: 1000,
    difference: 1000,
    req_rr: 1000,
    rr_difference: 1000,
  },
  {
    id: 2,
    region: 'UK',
    sum_of_target: 1000,
    sum_of_achieved: 1000,
    achieved_percentage: 1000,
    time_gone: 1000,
    current_rr: 1000,
    difference: 1000,
    req_rr: 1000,
    rr_difference: 1000,
  },
  {
    id: 3,
    region: 'UK',
    sum_of_target: 1000,
    sum_of_achieved: 1000,
    achieved_percentage: 1000,
    time_gone: 1000,
    current_rr: 1000,
    difference: 1000,
    req_rr: 1000,
    rr_difference: 1000,
  },
  {
    id: 4,
    region: 'UK',
    sum_of_target: 1000,
    sum_of_achieved: 1000,
    achieved_percentage: 1000,
    time_gone: 1000,
    current_rr: 1000,
    difference: 1000,
    req_rr: 1000,
    rr_difference: 1000,
  },
  {
    id: 5,
    region: 'UK',
    sum_of_target: 1000,
    sum_of_achieved: 1000,
    achieved_percentage: 1000,
    time_gone: 1000,
    current_rr: 1000,
    difference: 1000,
    req_rr: 1000,
    rr_difference: 1000,
  },
  {
    id: 6,
    region: 'UK',
    sum_of_target: 1000,
    sum_of_achieved: 1000,
    achieved_percentage: 1000,
    time_gone: 1000,
    current_rr: 1000,
    difference: 1000,
    req_rr: 1000,
    rr_difference: 1000,
  },
  {
    id: 7,
    region: 'UK',
    sum_of_target: 1000,
    sum_of_achieved: 1000,
    achieved_percentage: 1000,
    time_gone: 1000,
    current_rr: 1000,
    difference: 1000,
    req_rr: 1000,
    rr_difference: 1000,
  },
  {
    id: 8,
    region: 'UK',
    sum_of_target: 1000,
    sum_of_achieved: 1000,
    achieved_percentage: 1000,
    time_gone: 1000,
    current_rr: 1000,
    difference: 1000,
    req_rr: 1000,
    rr_difference: 1000,
  },
  {
    id: 9,
    region: 'UK',
    sum_of_target: 1000,
    sum_of_achieved: 1000,
    achieved_percentage: 1000,
    time_gone: 1000,
    current_rr: 1000,
    difference: 1000,
    req_rr: 1000,
    rr_difference: 1000,
  },
  {
    id: 10,
    region: 'UK',
    sum_of_target: 1000,
    sum_of_achieved: 1000,
    achieved_percentage: 1000,
    time_gone: 1000,
    current_rr: 1000,
    difference: 1000,
    req_rr: 1000,
    rr_difference: 1000,
  },
];

const columns = [
  {
    field: 'region',
    headerName: 'Region',
    groupable: true,
    flex: 1,
    minWidth: 140,
  },
  {
    field: 'sum_of_target',
    headerName: 'Sum of Target',
    groupable: true,
    flex: 1,
    width: 110,
  },
  {
    field: 'sum_of_achieved',
    headerName: 'Sum of Achieved',
    type: 'number',
    flex: 1,
    width: 130,
    valueFormatter: (value) => formatNumber(value),
  },
  {
    field: 'achieved_percentage',
    headerName: 'Achieved Percentage',
    type: 'number',
    flex: 1,
    width: 130,
    valueFormatter: (value) => formatNumber(value),
  },
  {
    field: 'time_gone',
    headerName: 'Time Gone',
    type: 'number',
    flex: 1,
    width: 120,
    valueFormatter: (value) => formatNumber(value),
  },
  {
    field: 'current_rr',
    headerName: 'Current RR',
    type: 'number',
    flex: 1,
    width: 130,
    valueFormatter: (value) => formatPercent(value),
  },
  {
    field: 'difference',
    headerName: 'Difference',
    type: 'number',
    flex: 1,
    width: 140,
    valueFormatter: (value) => value,
  },
  {
    field: 'req_rr',
    headerName: 'Req RR',
    type: 'number',
    flex: 1,
    width: 110,
  },
  {
    field: 'rr_difference',
    headerName: 'RR Difference',
    type: 'number',
    flex: 1,
    width: 130,
  },
];
const MtdFinalTargetRegion = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        // height: { xs: 'calc(100vh - 200px)', md: 'calc(100vh - 130px)' },
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
        label="MTD Final Target Region"
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

export default MtdFinalTargetRegion;
