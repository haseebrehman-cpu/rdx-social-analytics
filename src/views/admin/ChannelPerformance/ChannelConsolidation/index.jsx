import { useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import ChannelConsolidationGrid from 'sections/admin/Grids/ChannelPerformance/ChannelConsolidationGrid';
import Button from 'components/Button/Button';
import FileUploadDialog from 'components/Dialogs/FileUploadDialog';
import { MdUpload } from 'react-icons/md';
import { Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IoRefresh } from 'react-icons/io5';
import { toast } from 'react-toastify';

const ChannelConsolidationView = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const handleLoadReport = () => {
    toast.success('Load Report initiated');
  };
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
        alignItems="center"
        backgroundColor={isDark ? '#131B3D' : '#FFFFFF'}
        p={{ base: 2, md: 3 }}
        borderRadius="12px"
        border={`1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`}
        boxShadow={`0 4px 16px ${isDark ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.05)'}`}
        display="flex"
        justifyContent="space-between"
      >
        <Box>
          <Alert severity="warning">
            Incase of any missing value, please contact SEO Team
          </Alert>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box>
            <Button
              variant="outlined"
              size="medium"
              onClick={handleLoadReport}
              sx={{ borderRadius: '8px' }}
              color="primary"
              startIcon={<IoRefresh />}
            >
              Load Report
            </Button>
          </Box>
          <Box>
            <Button
              variant="outlined"
              size="medium"
              onClick={handleOpen}
              sx={{ borderRadius: '8px' }}
              color="primary"
              startIcon={<MdUpload />}
            >
              Upload File
            </Button>
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <Box>
          <ChannelConsolidationGrid />
        </Box>
      </SimpleGrid>
      <FileUploadDialog open={open} onClose={handleClose} />
    </Box>
  );
};
export default ChannelConsolidationView;
