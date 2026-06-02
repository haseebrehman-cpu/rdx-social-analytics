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
import Button from 'components/Button/Button';
import FileUploadDialog from 'components/Dialogs/FileUploadDialog';
import { MdUpload } from 'react-icons/md';

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
        Target
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
      <Button startIcon={<MdUpload />} onClick={handleOpen}>Upload File</Button>
      <FileUploadDialog open={open} onClose={handleClose} />
    </GridToolbarContainer>
  );
}

const rows = [
  {
    id: 1,
    region: 'UK',
    month: 'January',
    target: 1000,
    channel: 'Affiliate',
    achieved: 1000,
  },
  {
    id: 2,
    region: 'EU',
    month: 'January',
    target: 1000,
    channel: 'Email',
    achieved: 1000,
  },
  {
    id: 3,
    region: 'US',
    month: 'January',
    target: 1000,
    channel: 'Organic',
    achieved: 1000,
  },
];

const columns = [
  {
    field: 'region',
    headerName: 'Region',
    groupable: true,
    flex: 1,
  },
  {
    field: 'channel',
    headerName: 'Channel',
    flex: 1,
  },
  {
    field: 'month',
    headerName: 'Month',
    groupable: true,
    flex: 1,
  },
  {
    field: 'target',
    headerName: 'Target',
    groupable: true,
    flex: 1,
  },
  {field: 'achieved', headerName: 'Achieved', flex: 1},
];
const TargetGrid = () => {
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
        label="Target"
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

export default TargetGrid;
