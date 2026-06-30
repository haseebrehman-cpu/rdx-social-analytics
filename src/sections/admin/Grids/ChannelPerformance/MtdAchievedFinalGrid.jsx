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
        MTD Target Vs Achieved
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
    sum_of_target: "263,910",
    sum_of_achieved: "176,509",
    achieved_percentage: "67%",
    time_gone: "33%",
    current_rr: "0.67",
    difference: "87,401",
    req_rr: "4,370",
    mee: "529,528",
    mee_target_achieved: "200.65%",
  },
];

const columns = [
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
  },
  {
    field: 'achieved_percentage',
    headerName: 'Achieved Percentage',
    type: 'number',
    flex: 1,
    width: 130,
  },
  {
    field: 'time_gone',
    headerName: 'Time Gone',
    type: 'number',
    flex: 1,
    width: 120,
  },
  {
    field: 'current_rr',
    headerName: 'Current RR',
    type: 'number',
    flex: 1,
    width: 130,
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
    field: 'mee',
    headerName: 'MEE (Month End Expected)',
    type: 'number',
    flex: 1,
    width: 130,
  },
  {
    field: 'mee_target_achieved',
    headerName: 'MEE Target Achieved',
    type: 'number',
    flex: 1,
    width: 130,
  },
];
const MtdAchievedFinalGrid = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        // height: { xs: 'calc(100vh - 200px)', md: 'calc(100vh - 130px)' },
        maxHeight: '250px',
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
        label="MTD Achieved Final"
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

export default MtdAchievedFinalGrid;
