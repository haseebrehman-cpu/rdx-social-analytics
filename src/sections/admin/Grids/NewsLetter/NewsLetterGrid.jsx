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
        Region Wise Summary
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
    row_labels: "CA",
    count_of_campaign_message_id: 1,
    total_recipient: 100,
    open_rate_cal: 100,
    calc_click_rate: 100,
    total_open_cal: 100,
    total_click_cal: 100,
    cal_ctr: 100,
  },
  {
    id: 2,
    row_labels: "EU",
    count_of_campaign_message_id: 2,
    total_recipient: 100,
    open_rate_cal: 100,
    calc_click_rate: 100,
    total_open_cal: 100,
    total_click_cal: 100,
    cal_ctr: 100,
  },
  {
    id: 3,
    row_labels: "UK",
    count_of_campaign_message_id: 3,
    total_recipient: 100,
    open_rate_cal: 100,
    calc_click_rate: 100,
    total_open_cal: 100,
    total_click_cal: 100,
    cal_ctr: 100,
  },
  {
    id: 4,
    row_labels: "USA",
    count_of_campaign_message_id: 4,
    total_recipient: 100,
    open_rate_cal: 100,
    calc_click_rate: 100,
    total_open_cal: 100,
    total_click_cal: 100,
    cal_ctr: 100,
  },
  {
    id: 5,
    row_labels: "Global",
    count_of_campaign_message_id: 5,
    total_recipient: 100,
    open_rate_cal: 100,
    calc_click_rate: 100,
    total_open_cal: 100,
    total_click_cal: 100,
    cal_ctr: 100,
  },
  {
    id: 6,
    row_labels: "AE",
    count_of_campaign_message_id: 6,
    total_recipient: 100,
    open_rate_cal: 100,
    calc_click_rate: 100,
    total_open_cal: 100,
    total_click_cal: 100,
    cal_ctr: 100,
  },
];

const parseValue = (value) => Number(value) || 0;

const formatNumber = (value) =>
  new Intl.NumberFormat('en-US').format(Math.round(parseValue(value)));

const sumField = (field) =>
  rows.reduce((acc, row) => acc + parseValue(row[field]), 0);

const NUMERIC_FIELDS = [
  'count_of_campaign_message_id',
  'total_recipient',
  'open_rate_cal',
  'calc_click_rate',
  'total_open_cal',
  'total_click_cal',
  'cal_ctr',
];

const totalRow = {
  id: 'grand-total',
  row_labels: 'Grand Total',
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
    field: 'row_labels',
    headerName: 'Row Labels',
    groupable: true,
    flex: 1,
  },
  numericColumn('count_of_campaign_message_id', 'Count of Campaign Message ID', 1),
  numericColumn('total_recipient', 'Total Recipient', 1),
  numericColumn('open_rate_cal', 'Open Rate Cal', 1),
  numericColumn('calc_click_rate', 'Calc Click Rate', 1),
  numericColumn('total_open_cal', 'Total Open Cal', 1),
  numericColumn('total_click_cal', 'Total Click Cal', 1),
  numericColumn('cal_ctr', 'Cal CTR', 1),
];

const NewsLetterGrid = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
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
        label="Region Wise Summary"
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

export default NewsLetterGrid;
