import React, { useState } from 'react';
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
import { MdUpload } from 'react-icons/md';
import Button from 'components/Button/Button';
import FileUploadDialog from 'components/Dialogs/FileUploadDialog';

function CustomToolbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        Channel Consolidationss
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
      <Button startIcon={<MdUpload />} onClick={handleOpen}>
        Upload File
      </Button>
      <FileUploadDialog open={open} onClose={handleClose} />
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
  },
];
const ChannelConsolidationGrid = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '600px', sm: '600px', md: '640px' },
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
        rows={rows}
        columns={columns}
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
