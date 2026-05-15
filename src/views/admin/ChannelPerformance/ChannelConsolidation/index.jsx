import React, { useState } from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import ChannelConsolidationGrid from 'sections/admin/Grids/ChannelPerformance/ChannelConsolidationGrid';
import Button from 'components/Button/Button';
import { MdUpload } from 'react-icons/md';
import FileUploadDialog from 'components/Dialogs/FileUploadDialog';

const ChannelConsolidationView = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '50px' }}>
      <Button startIcon={<MdUpload />} onClick={handleOpen}>Upload File</Button>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <ChannelConsolidationGrid />
      </SimpleGrid>
      <FileUploadDialog open={open} onClose={handleClose} />
    </Box>
  );
};

export default ChannelConsolidationView;
