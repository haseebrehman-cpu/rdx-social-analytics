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

const parseValue = (value) => {
  if (value == null || value === '') return 0;
  const num = parseFloat(String(value).replace(/,/g, '').replace('%', ''));
  return Number.isNaN(num) ? 0 : num;
};

const rows = [
  {
    id: 1,
    region: 'UK',
    sum_of_target: "1,979",
    sum_of_achieved: "938,711",
    achieved_percentage: "70%",
    time_gone: "30%",
    current_rr: "0.70%",
    difference: "45",
    req_rr: "5",
    rr_difference: "189",
  },
  {
    id: 2,
    region: 'CA',
    sum_of_target: "2,279",
    sum_of_achieved: "1,138,711",
    achieved_percentage: "50%",
    time_gone: "50%",
    current_rr: "0.50%",
    difference: "114,122",
    req_rr: "11,387",
    rr_difference: "102,735",
  },
  {
    id: 3,
    region: 'UK',
    sum_of_target: "2,479",
    sum_of_achieved: "1,238,711",
    achieved_percentage: "70%",
    time_gone: "30%",
    current_rr: "0.70%",
    difference: "124,122",
    req_rr: "15,387",
    rr_difference: "108,735",
  },
  {
    id: 4,
    region: 'EU',
    sum_of_target: "2,679",
    sum_of_achieved: "1,038,711",
    achieved_percentage: "50%",
    time_gone: "50%",
    current_rr: "0.50%",
    difference: "144,122",
    req_rr: "17,387",
    rr_difference: "126,735",
  },
  {
    id: 5,
    region: 'INT',
    sum_of_target: "2,879",
    sum_of_achieved: "1,338,711",
    achieved_percentage: "50%",
    time_gone: "50%",
    current_rr: "0.50%",
    difference: "164,122",
    req_rr: "19,387",
    rr_difference: "144,735",
  },
  {
    id: 6,
    region: 'UK',
    sum_of_target: "3,079",
    sum_of_achieved: "1,438,711",
    achieved_percentage: "50%",
    time_gone: "50%",
    current_rr: "0.50%",
    difference: "184,122",
    req_rr: "21,387",
    rr_difference: "164,735",
  },
  {
    id: 7,
    region: 'US',
    sum_of_target: "3,279",
    sum_of_achieved: "1,538,711",
    achieved_percentage: "50%",
    time_gone: "50%",
    current_rr: "0.50%",
    difference: "204,122",
    req_rr: "23,387",
    rr_difference: "180,735",
  },
];

const sumField = (field) =>
  rows.reduce((acc, row) => acc + parseValue(row[field]), 0);

const totalRow = {
  id: 'grand-total',
  region: 'Grand Total',
  sum_of_target: formatNumber(sumField('sum_of_target')),
  sum_of_achieved: formatNumber(sumField('sum_of_achieved')),
  achieved_percentage: formatPercent(sumField('achieved_percentage')),
  time_gone: formatPercent(sumField('time_gone')),
  current_rr: formatPercent(sumField('current_rr')),
  difference: formatNumber(sumField('difference')),
  req_rr: formatNumber(sumField('req_rr')),
  rr_difference: formatNumber(sumField('rr_difference')),
};

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
        pinnedRows={{ bottom: [totalRow] }}
        pagination
        pageSizeOptions={[10, 25, 50, 100]}
        sx={{
          ...getDataGridStyles(isDark, '100%'),
          '& .MuiDataGrid-row--pinned': {
            backgroundColor: isDark
              ? 'rgba(255, 255, 255, 0.06) !important'
              : 'rgba(0, 0, 0, 0.04) !important',
          },
          '& .MuiDataGrid-row--pinned .MuiDataGrid-cell': {
            fontWeight: 700,
            color: isDark ? '#ffffff' : '#101828',
          },
        }}
        showToolbar
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
};

export default MtdFinalTargetRegion;
