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
        TikTok Compaign
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
    total_profile_visits: 100,
    total_paid_followers: 100,
    total_video_views: 100,
    total_interactions: 100,
  },
  {
    id: 2,
    week: 'Week 2',
    total_profile_visits: 100,
    total_paid_followers: 100,
    total_video_views: 100,
    total_interactions: 100,
  },
  {
    id: 3,
    week: 'Week 3',
    total_profile_visits: 100,
    total_paid_followers: 100,
    total_video_views: 100,
    total_interactions: 100,
  },
  {
    id: 4,
    week: 'Week 4',
    total_profile_visits: 100,
    total_paid_followers: 100,
    total_video_views: 100,
    total_interactions: 100,
  },
  {
    id: 5,
    week: 'Week 5',
    total_profile_visits: 100,
    total_paid_followers: 100,
    total_video_views: 100,
    total_interactions: 100,
  },
  {
    id: 6,
    week: 'Week 6',
    total_profile_visits: 100,
    total_paid_followers: 100,
    total_video_views: 100,
    total_interactions: 100,
  },
];

const parseValue = (value) => Number(value) || 0;

const formatNumber = (value) =>
  new Intl.NumberFormat('en-US').format(Math.round(parseValue(value)));

const sumField = (field) =>
  rows.reduce((acc, row) => acc + parseValue(row[field]), 0);

const NUMERIC_FIELDS = [
  'total_profile_visits',
  'total_paid_followers',
  'total_video_views',
  'total_interactions',
];

const totalRow = {
  id: 'grand-total',
  week: 'Grand Total',
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
    field: 'week',
    headerName: 'Week',
    groupable: true,
    flex: 1,
  },
  numericColumn('total_profile_visits', 'Total Profile Visits', 1),
  numericColumn('total_paid_followers', 'Total Paid Followers', 1),
  numericColumn('total_video_views', 'Total Video Views', 1),
  numericColumn('total_interactions', 'Total Interactions', 1),
];

const TikTokCompaignGrid = () => {
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
        label="TikTok Compaign"
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        pinnedRows={{ bottom: [totalRow] }}
        showToolbar
        pagination
        pageSizeOptions={[10, 25, 50, 100]}
        sx={{
          ...getDataGridStyles(isDark, '100vw'),
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

export default TikTokCompaignGrid;
