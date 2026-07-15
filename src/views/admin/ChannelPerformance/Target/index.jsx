import { useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import TargetGrid from 'sections/admin/Grids/ChannelPerformance/TargetGrid';
import CustomButton from 'components/Button/Button';
import { MdUpload } from 'react-icons/md';
import FileUploadDialog from 'components/Dialogs/FileUploadDialog';
import { useTheme } from '@mui/material/styles';
import { IoRefresh } from 'react-icons/io5';
import { toast } from 'react-toastify';
import DropdownField from 'components/fields/dropdownField';

const TargetView = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [targetType, setTargetType] = useState('first_click');
  const handleTargetTypeChange = (event) => {
    setTargetType(event.target.value);
  };

  const targetTypeOptions = [
    { value: 'first_click', label: 'First Click' },
    { value: 'last_click', label: 'Last Click' },
  ];
  const handleUpload = async (file, onProgress) => {
    await new Promise((resolve) => {
      let pct = 0;
      const interval = setInterval(() => {
        pct += 20;
        onProgress?.(Math.min(pct, 100));
        if (pct >= 100) {
          clearInterval(interval);
          resolve();
        }
      }, 150);
    });
  };

  const handleLoadReport = () => {
    toast.success('Load Report initiated');
  };

  const handleRefreshReport = () => {
    toast.success('Refresh Report initiated');
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
        justifyContent="flex-end"
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
          <CustomButton
            variant="outlined"
            size="small"
            onClick={handleRefreshReport}
            sx={{ borderRadius: '8px', color: 'white' }}
            startIcon={<IoRefresh />}
          >
            Refresh Report
          </CustomButton> 
          <CustomButton
            variant="outlined"
            size="small"
            onClick={handleLoadReport}
            sx={{ borderRadius: '8px', color: 'white' }}
            startIcon={<IoRefresh />}
          >
            Load Report
          </CustomButton>
          <CustomButton
            variant="outlined"
            size="small"
            onClick={handleOpen}
            sx={{ borderRadius: '8px', color: 'white' }}
            startIcon={<MdUpload />}
          >
            Upload File
          </CustomButton>
          <DropdownField
            value={targetType}
            onChange={handleTargetTypeChange}
            options={targetTypeOptions}
            labelId="target-type-label"
            id="target-type"
          />
        </Box>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <TargetGrid />
      </SimpleGrid>
      <FileUploadDialog
        open={open}
        onClose={handleClose}
        onUpload={handleUpload}
        title="Upload Target File"
        description="Upload your target data spreadsheet. Drag and drop or browse to select a file."
      />
    </Box>
  );
};

export default TargetView;
