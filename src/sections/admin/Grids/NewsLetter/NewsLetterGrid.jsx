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
        News Letter Grid
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
    newsletter_id: 1,
    newsletter_name: 'News Letter 1',
    newsletter_description: 'News Letter 1 Description',
    newsletter_created_at: new Date('2026-04-12'),
    newsletter_updated_at: new Date('2026-04-18'),
  },
  {
    id: 2,
    newsletter_id: 2,
    newsletter_name: 'News Letter 2',
    newsletter_description: 'News Letter 2 Description',
    newsletter_created_at: new Date('2026-04-18'),
    newsletter_updated_at: new Date('2026-04-18'),
  },
  {
    id: 3,
    newsletter_id: 3,
    newsletter_name: 'News Letter 3',
    newsletter_description: 'News Letter 3 Description',
    newsletter_created_at: new Date('2026-04-18'),
    newsletter_updated_at: new Date('2026-04-18'),
  },
  {
    id: 4,
    newsletter_id: 4,
    newsletter_name: 'News Letter 4',
    newsletter_description: 'News Letter 4 Description',
    newsletter_created_at: new Date('2026-04-18'),
    newsletter_updated_at: new Date('2026-04-18'),
  },
  {
    id: 5,
    newsletter_id: 5,
    newsletter_name: 'News Letter 5',
    newsletter_description: 'News Letter 5 Description',
    newsletter_created_at: new Date('2026-04-18'),
    newsletter_updated_at: new Date('2026-04-18'),
  },
  {
    id: 6,
    newsletter_id: 6,
    newsletter_name: 'News Letter 6',
    newsletter_description: 'News Letter 6 Description',
    newsletter_created_at: new Date('2026-04-18'),
    newsletter_updated_at: new Date('2026-04-18'),
  },
];

const columns = [
  {
    field: 'newsletter_id',
    headerName: 'News Letter ID',
    groupable: true,
    flex: 1,
  },
  {
    field: 'newsletter_name',
    headerName: 'News Letter Name',
    flex: 1,
  },
  {
    field: 'newsletter_description',
    headerName: 'News Letter Description',
    flex: 1,
  },
  {
    field: 'newsletter_created_at',
    headerName: 'News Letter Created At',
    groupable: true,
    flex: 1,
  },
  {
    field: 'newsletter_updated_at',
    headerName: 'News Letter Updated At',
    flex: 1,
  },
  {
    field: 'year',
    headerName: 'News Letter Updated At',
    flex: 1,
  },
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
        label="News Letter Grid"
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

export default NewsLetterGrid;
