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
        Campaign Performance
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
    campaign_name: 'Campaign 1',
    total_recipient: 100,
    total_open_cal: 100,
    total_click_calc: 100,
    calc_click_rate: 100,
    open_rate_cal: 100,
    calc_ctr: 100,
  },
  {
    id: 2,
    campaign_name: 'Campaign 2',
    total_recipient: 100,
    total_open_cal: 100,
    total_click_calc: 100,
    calc_click_rate: 100,
    open_rate_cal: 100,
    calc_ctr: 100,
  },
  {
    id: 3,
    campaign_name: 'Campaign 3',
    total_recipient: 100,
    total_open_cal: 100,
    total_click_calc: 100,
    calc_click_rate: 100,
    open_rate_cal: 100,
    calc_ctr: 100,
  },
  {
    id: 4,
    campaign_name: 'Campaign 4',
    total_recipient: 100,
    total_open_cal: 100,
    total_click_calc: 100,
    calc_click_rate: 100,
    open_rate_cal: 100,
    calc_ctr: 100,
  },
  {
    id: 5,
    campaign_name: 'Campaign 5',
    total_recipient: 100,
    total_open_cal: 100,
    total_click_calc: 100,
    calc_click_rate: 100,
    open_rate_cal: 100,
    calc_ctr: 100,
  },
  {
    id: 6,
    campaign_name: 'Campaign 6',
    total_recipient: 100,
    total_open_cal: 100,
    total_click_calc: 100,
    calc_click_rate: 100,
    open_rate_cal: 100,
    calc_ctr: 100,
  },
];

const parseValue = (value) => Number(value) || 0;

const formatNumber = (value) =>
  new Intl.NumberFormat('en-US').format(Math.round(parseValue(value)));

const sumField = (field) =>
  rows.reduce((acc, row) => acc + parseValue(row[field]), 0);

const NUMERIC_FIELDS = [
  'total_recipient',
  'total_open_cal',
  'total_click_calc',
  'calc_click_rate',
  'open_rate_cal',
  'calc_ctr',
];

const totalRow = {
  id: 'grand-total',
  campaign_name: 'Grand Total',
  ...Object.fromEntries(
    NUMERIC_FIELDS.map((field) => [field, sumField(field)]),
  ),
};

const numericColumn = (field, headerName, flex) => ({
  field,
  headerName,
  flex,
  type: 'number',
  valueFormatter: (value) => formatNumber(value),
});

const columns = [
  {
    field: 'campaign_name',
    headerName: 'Campaign Name',
    groupable: true,
    flex: 1,
  },
  numericColumn('total_recipient', 'Total Recipient', 1),
  numericColumn('total_open_cal', 'Total Open Cal', 1),
  numericColumn('total_click_calc', 'Total Click Calc', 1),
  numericColumn('calc_click_rate', 'Calc Click Rate', 1),
  numericColumn('open_rate_cal', 'Open Rate Cal', 1),
  numericColumn('calc_ctr', 'Calc CTR', 1),
];

const CampaignPerformance = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        // height: { xs: 'calc(100vh - 200px)', md: 'calc(100vh - 140px)' },
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
        label="Campaign Performance"
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        pinnedRows={{ bottom: [totalRow] }}
        showToolbar
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
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
};

export default CampaignPerformance;
