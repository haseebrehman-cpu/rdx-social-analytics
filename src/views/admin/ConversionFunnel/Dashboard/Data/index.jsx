import React from 'react';
import { Box } from '@chakra-ui/react';
import ConversionGrid from 'sections/admin/Grids/ConversionFunnel/Dashboard/ConversionGrid';

const ConversionGridView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <ConversionGrid />
    </Box>
  );
};

export default ConversionGridView;
