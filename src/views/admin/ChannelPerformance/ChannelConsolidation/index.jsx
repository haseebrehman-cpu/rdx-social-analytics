import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import ChannelConsolidationGrid from 'sections/admin/Grids/ChannelPerformance/ChannelConsolidationGrid';
import MarketingCostGrid from 'sections/admin/Grids/ChannelPerformance/MarketingCostGrid';
import TargetGrid from 'sections/admin/Grids/ChannelPerformance/TargetGrid';
import ReportGrid from 'sections/admin/Grids/ChannelPerformance/ReportGrid';
import ReportBaseGrid from 'sections/admin/Grids/ChannelPerformance/ReportBaseGrid';
// import Button from 'components/Button/Button';
// import { MdUpload } from 'react-icons/md';
// import FileUploadDialog from 'components/Dialogs/FileUploadDialog';

const ChannelConsolidationView = () => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      {/* <Button startIcon={<MdUpload />} onClick={handleOpen}>Upload File</Button> */}
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 2 }}
        gap="20px"
        mb="20px"
      >
        <Box sx={{ width: '100%', height: '100%' }}>
          <ChannelConsolidationGrid />
        </Box>
        <Box sx={{ width: '100%', height: '100%' }}>
          <TargetGrid />
        </Box>
        {/* <Box sx={{ width: '100%', height: '100%' }}>
          <MarketingCostGrid />
        </Box> */}
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <Box sx={{ width: '100%', height: '100%' }}>
          <MarketingCostGrid />
        </Box>
        <Box sx={{ width: '100%', height: '100%' }}>
          <ReportBaseGrid />
        </Box>
        <Box sx={{ width: '100%', height: '100%' }}>
          <ReportGrid />
        </Box>
      </SimpleGrid>
      {/* <FileUploadDialog open={open} onClose={handleClose} /> */}
    </Box>
  );
};

export default ChannelConsolidationView;
