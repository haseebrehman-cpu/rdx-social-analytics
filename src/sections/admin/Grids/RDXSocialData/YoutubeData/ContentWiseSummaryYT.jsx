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
        Content Wise Summary
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
    video_title: 'Boxing Combo Tutorial: Master the 1-2-3 for Maximum Impact #jamesrichardsfit',
    total_views: 26018,
  },
  {
    id: 2,
    video_title: 'This lead hook will destroy your opponents #boxing #technique',
    total_views: 15101,
  },
  {
    id: 3,
    video_title: '360 Kicking Tutorial: How to Master the Float Technique #trevorhannant_',
    total_views: 12101,
  },
  {
    id: 4,
    video_title: 'The Kicking Drills to Master Your Footwork #jamesrichardsfit',
    total_views: 11018,
  },
  {
    id: 5,
    video_title: 'How to Kicking with Drills for Maximum Power #jamesrichardsfit',
    total_views: 1018,
  },
  {
    id: 6,
    video_title: 'The Kicking Drills to Master Your Footwork #jamesrichardsfit',
    total_views: 100,
  },
];

const parseValue = (value) => Number(value) || 0;

const formatNumber = (value) =>
  new Intl.NumberFormat('en-US').format(Math.round(parseValue(value)));

const sumField = (field) =>
  rows.reduce((acc, row) => acc + parseValue(row[field]), 0);

const totalRow = {
  id: 'grand-total',
  video_title: 'Grand Total',
  total_views: sumField('total_views'),
};

const columns = [
  {
    field: 'video_title',
    headerName: 'Video Title',
    groupable: true,
    flex: 1,
  },
  {
    field: 'total_views',
    headerName: 'Total Views',
    flex: 1,
    type: 'number',
    valueFormatter: (value) => formatNumber(value),
  },
];

const ContentWiseSummaryYT = () => {
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
        label="Content Wise Summary"
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

export default ContentWiseSummaryYT;
