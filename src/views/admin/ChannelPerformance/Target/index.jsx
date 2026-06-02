import React, { useState } from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react';
import TargetGrid from 'sections/admin/Grids/ChannelPerformance/TargetGrid';
import Button from 'components/Button/Button';
import { MdUpload } from 'react-icons/md';
import FileUploadDialog from 'components/Dialogs/FileUploadDialog';

const TargetView = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    console.log('Uploaded file:', file?.name);
  };

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '50px' }}>
      <Button startIcon={<MdUpload />} onClick={handleOpen}>Upload File</Button>
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
  )
}

export default TargetView