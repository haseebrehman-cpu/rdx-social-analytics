import React from 'react';
import { Box } from '@chakra-ui/react';
import SourceWiseTraffic from 'sections/admin/Grids/ConversionFunnel/Report/SourceWiseTraffic';
import SourceWiseSale from 'sections/admin/Grids/ConversionFunnel/Report/SourceWiseSale';
import FunnelGrid from 'sections/admin/Grids/ConversionFunnel/Report/FunnelGrid';
const FunnelView = () => {
  return (
    <Box
      pt={{ base: '130px', md: '80px', xl: '80px' }}
      boxSizing="border-box"
    >
      <Box minH="0" overflow="hidden" py={2}>
        <FunnelGrid />
      </Box>
      <Box minH="0" overflow="hidden" py={2}>
        <SourceWiseSale />
      </Box>
      <Box minH="0" overflow="hidden" py={2}>
        <SourceWiseTraffic />
      </Box>
    </Box>
  );
};

export default FunnelView;
