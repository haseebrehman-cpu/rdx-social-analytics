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
        Instagram Account Name
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
    account_name: 'James Richard',
    no_of_post: 5,
    total_views: '10,705',
    total_likes: '15,153',
    total_comments: 85,
    total_shares: '1,442',
    interaction: '15,552',
    engagement_rate: '15,153',
  },
  {
    id: 2,
    account_name: 'IMMAF',
    no_of_post: 6,
    total_views: '10,705',
    total_likes: '15,153',
    total_comments: 85,
    total_shares: '1,922',
    interaction: '10,705',
    engagement_rate: '15,153',
  },
  {
    id: 3,
    account_name: 'Nat Hearn',
    no_of_post: 7,
    total_views: '10,705',
    total_likes: '15,153',
    total_comments: 85,
    total_shares: '3,442',
    interaction: '10,705',
    engagement_rate: '15,153',
  },
  {
    id: 4,
    account_name: 'GLimitless',
    no_of_post: 8,
    total_views: '10,705',
    total_likes: '15,153',
    total_comments: 85,
    total_shares: '1,252',
    interaction: '10,705',
    engagement_rate: '15,153',
  },
  {
    id: 5,
    account_name: 'ROMIE',
    no_of_post: 9,
    total_views: '10,705',
    total_likes: '15,153',
    total_comments: 85,
    total_shares: '0.79%',
    interaction: '10,705',
    engagement_rate: '15,153',
  },
  {
    id: 6,
    account_name: 'Mark',
    no_of_post: 9,
    total_views: '10,705',
    total_likes: '15,153',
    total_comments: 85,
    total_shares: '0.79%',
    interaction: '10,705',
    engagement_rate: '15,153',
  },
];

const columns = [
  {
    field: 'account_name',
    headerName: 'Account Name',
    groupable: true,
    flex: 1,
  },
  {
    field: 'no_of_post',
    headerName: 'No of Post',
    flex: 1,
  },
  {
    field: 'total_views',
    headerName: 'Total Views',
    flex: 1,
  },
  {
    field: 'total_likes',
    headerName: 'Total Likes',
    flex: 1,
  },
  {
    field: 'total_comments',
    headerName: 'Total Comments',
    flex: 1,
  },
  {
    field: 'total_shares',
    headerName: 'Total Shares',
    flex: 1,
  },
  {
    field: 'interaction',
    headerName: 'Interaction',
    flex: 1,
  },
  {
    field: 'engagement_rate',
    headerName: 'Engagement Rate',
    flex: 1,
  },
];

const InstaAccountName = () => {
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
        label="Instagram Account Name"
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        showToolbar
        pagination
        pageSizeOptions={[10, 25, 50, 100]}
        sx={getDataGridStyles(isDark, '100%')}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
};

export default InstaAccountName;
