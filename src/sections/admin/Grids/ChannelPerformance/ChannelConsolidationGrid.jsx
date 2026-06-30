import { useCallback, useState } from 'react';
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
        Channel Consolidation
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
    referring_platform: 'UK',
    channel: 'Amazon',
    type: 'Paid',
    channel_final: 'Amazon',
  },
  {
    id: 2,
    referring_platform: 'Google',
    channel: 'Google',
    type: 'Paid',
    channel_final: 'Google',
  },
  {
    id: 3,
    referring_platform: 'Facebook',
    channel: 'Facebook',
    type: 'Paid',
    channel_final: 'Facebook',
  },
  {
    id: 4,
    referring_platform: 'Instagram',
    channel: 'Instagram',
    type: 'Paid',
    channel_final: 'Instagram',
  },
  {
    id: 5,
    referring_platform: 'Twitter',
    channel: 'Twitter',
    type: 'Paid',
    channel_final: 'Twitter',
  },
  {
    id: 6,
    referring_platform: 'TikTok',
    channel: 'TikTok',
    type: 'Paid',
    channel_final: 'TikTok',
  },
  {
    id: 7,
    referring_platform: 'YouTube',
    channel: 'YouTube',
    type: 'Paid',
    channel_final: 'YouTube',
  },
  {
    id: 8,
    referring_platform: 'Pinterest',
    channel: 'Pinterest',
    type: 'Paid',
    channel_final: 'Pinterest',
  },
];

const columns = [
  {
    field: 'referring_platform',
    headerName: 'Referring platform',
    groupable: true,
    flex: 1,
  },
  {
    field: 'channel',
    headerName: 'Channel',
    flex: 1,
  },
  {
    field: 'type',
    headerName: 'Type',
    groupable: true,
    flex: 1,
  },
  {
    field: 'channel_final',
    headerName: 'Channel final',
    groupable: true,
    flex: 1,
    editable: true,
  },
];
const ChannelConsolidationGrid = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [rowsData, setRowsData] = useState(rows)

  const processRowUpdate = useCallback((newRow) => {
    setRowsData((prevRows) =>
      prevRows.map((row) => (row.id === newRow.id ? newRow : row)),
    );
    return newRow;
  }, [])
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 'calc(100vh - 200px)', md: 'calc(100vh - 240px)' },
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
        label="Channel Consolidation"
        apiRef={apiRef}
        rows={rowsData}
        columns={columns}
        editMode="cell"
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={(error) => console.error(error)}
        pagination
        pageSizeOptions={[10, 25, 50, 100]}
        sx={getDataGridStyles(isDark, '100%')}
        showToolbar
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
};

export default ChannelConsolidationGrid;
