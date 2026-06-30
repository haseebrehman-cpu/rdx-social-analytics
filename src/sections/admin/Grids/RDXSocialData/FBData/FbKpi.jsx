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
        Facebook KPI
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
    week: 'Week 1',
    no_of_post: 5,
    total_reach: '10,705',
    total_views: '15,153',
    interactions: 85,
    engagement_rate: '0.79%',
  },
  {
    id: 2,
    week: 'Week 2',
    no_of_post: 6,
    total_reach: '10,705',
    total_views: '15,153',
    interactions: 85,
    engagement_rate: '0.79%',
  },
  {
    id: 3,
    week: 'Week 3',
    no_of_post: 7,
    total_reach: '10,705',
    total_views: '15,153',
    interactions: 85,
    engagement_rate: '0.79%',
  },
  {
    id: 4,
    week: 'Week 4',
    no_of_post: 8,
    total_reach: '10,705',
    total_views: '15,153',
    interactions: 85,
    engagement_rate: '0.79%',
  },
  {
    id: 5,
    week: 'Week 5',
    no_of_post: 9,
    total_reach: '10,705',
    total_views: '15,153',
    interactions: 85,
    engagement_rate: '0.79%',
  },
  {
    id: 6,
    week: 'Week 6',
    no_of_post: 9,
    total_reach: '10,705',
    total_views: '15,153',
    interactions: 85,
    engagement_rate: '0.79%',
  },
];

const parseValue = (value) => {
  const num = parseFloat(String(value).replace(/,/g, '').replace('%', ''));
  return Number.isNaN(num) ? 0 : num;
};

const formatNumber = (value) =>
  new Intl.NumberFormat('en-US').format(Math.round(parseValue(value)));

const formatPercent = (value) => `${parseValue(value).toFixed(2)}%`;

const sumField = (field) =>
  rows.reduce((acc, row) => acc + parseValue(row[field]), 0);

const NUMERIC_FIELDS = [
  'no_of_post',
  'total_reach',
  'total_views',
  'interactions',
  'engagement_rate',
];

const totalRow = {
  id: 'grand-total',
  week: 'Grand Total',
  ...Object.fromEntries(
    NUMERIC_FIELDS.map((field) => [field, sumField(field)]),
  ),
};

const numericColumn = (field, headerName, flex, formatter = formatNumber) => ({
  field,
  headerName,
  flex,
  type: 'number',
  valueFormatter: (value) => formatter(value),
});

const columns = [
  {
    field: 'week',
    headerName: 'Week',
    groupable: true,
    flex: 1,
  },
  numericColumn('no_of_post', 'No of Post', 1),
  numericColumn('total_reach', 'Total Reach', 1),
  numericColumn('total_views', 'Total Views', 1),
  numericColumn('interactions', 'Interactions', 1),
  numericColumn('engagement_rate', 'Engagement Rate', 1, formatPercent),
];

const FbKpi = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        // height: { xs: 'calc(100vh - 200px)', md: 'calc(100vh - 220px)' },
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
        label="FbKpi"
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

export default FbKpi;
