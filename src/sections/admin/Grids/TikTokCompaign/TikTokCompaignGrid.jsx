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

const columns = [
  {
    field: 'week',
    headerName: 'Week',
    groupable: true,
    flex: 1,
  },
  {
    field: 'total_profile_visits',
    headerName: 'Total Profile Visits',
    flex: 1,
  },
  {
    field: 'total_paid_followers',
    headerName: 'Total Paid Followers',
    flex: 1,
  },
  {
    field: 'total_video_views',
    headerName: 'Total Video Views',
    groupable: true,
    flex: 1,
  },
  {
    field: 'total_interactions',
    headerName: 'Total Interactions',
    flex: 1,
  },
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
        label="TikTok Compaign"
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        showToolbar
        pagination
        pageSizeOptions={[10, 25, 50, 100]}
        sx={getDataGridStyles(isDark, '100vw')}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
};

export default TikTokCompaignGrid;
