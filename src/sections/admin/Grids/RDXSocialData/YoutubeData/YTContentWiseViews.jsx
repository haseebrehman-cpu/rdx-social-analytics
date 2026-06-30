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
        YT Content Wise Views
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
    date: '2026-01-01',
    content:
      'Boxing Combo Tutorial: Master the 1-2-3 for Maximum Impact #jamesrichardsfit',
    video_title:
      'Boxing Combo Tutorial: Master the 1-2-3 for Maximum Impact #jamesrichardsfit',
    video_publish_time: '2026-01-01',
    duration: '100',
    views: 26018,
  },
  {
    id: 2,
    date: '2026-01-01',
    content: 'This lead hook will destroy your opponents #boxing #technique',
    video_title:
      'This lead hook will destroy your opponents #boxing #technique',
    video_publish_time: '2026-01-01',
    duration: '100',
    views: 15101,
  },
  {
    id: 3,
    date: '2026-01-01',
    content:
      '360 Kicking Tutorial: How to Master the Float Technique #trevorhannant_',
    video_title:
      '360 Kicking Tutorial: How to Master the Float Technique #trevorhannant_',
    video_publish_time: '2026-01-01',
    duration: '100',
    views: 12101,
  },
  {
    id: 4,
    date: '2026-01-01',
    content: 'The Kicking Drills to Master Your Footwork #jamesrichardsfit',
    video_title: 'The Kicking Drills to Master Your Footwork #jamesrichardsfit',
    video_publish_time: '2026-01-01',
    duration: '100',
    views: 11018,
  },
  {
    id: 5,
    date: '2026-01-01',
    content: 'How to Kicking with Drills for Maximum Power #jamesrichardsfit',
    video_title:
      'How to Kicking with Drills for Maximum Power #jamesrichardsfit',
    video_publish_time: '2026-01-01',
    duration: '100',
    views: 1018,
  },
  {
    id: 6,
    date: '2026-01-01',
    content: 'The Kicking Drills to Master Your Footwork #jamesrichardsfit',
    video_title: 'The Kicking Drills to Master Your Footwork #jamesrichardsfit',
    video_publish_time: '2026-01-01',
    duration: '100',
    views: 100,
  },
];

const columns = [
  {
    field: 'date',
    headerName: 'Date',
    groupable: true,
    flex: 1,
  },
  {
    field: 'content',
    headerName: 'Content',
    flex: 1,
  },
  {
    field: 'video_title',
    headerName: 'Video Title',
    flex: 1,
  },
  {
    field: 'video_publish_time',
    headerName: 'Video Publish Time',
    flex: 1,
  },
  {
    field: 'duration',
    headerName: 'Duration',
    flex: 1,
    type: 'duration',
  },
  {
    field: 'views',
    headerName: 'Views',
    flex: 1,
    type: 'number',
    valueFormatter: (value) =>
      new Intl.NumberFormat('en-US').format(Math.round(Number(value))),
  },
];

const YTContentWiseViews = () => {
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
        label="YT Content Wise Views"
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

export default YTContentWiseViews;
