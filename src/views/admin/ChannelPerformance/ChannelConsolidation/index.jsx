import React, { useState } from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import ChannelConsolidationGrid from 'sections/admin/Grids/ChannelPerformance/ChannelConsolidationGrid';
import Button from 'components/Button/Button';
import FileUploadDialog from 'components/Dialogs/FileUploadDialog';
import { MdUpload } from 'react-icons/md';

const ChannelConsolidationView = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Button startIcon={<MdUpload />} onClick={handleOpen}>
        Upload File
      </Button>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <Box sx={{ width: '100%', height: '100%' }}>
          <ChannelConsolidationGrid />
        </Box>
      </SimpleGrid>
      <FileUploadDialog open={open} onClose={handleClose} />
    </Box>
  );
};

export default ChannelConsolidationView;
