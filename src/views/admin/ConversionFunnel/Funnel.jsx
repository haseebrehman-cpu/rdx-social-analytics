import React from 'react';
import { Box } from '@chakra-ui/react';
import SourceWiseSale from 'sections/admin/Grids/ConversionFunnel/SourceWiseSale';
import FunnelGrid from 'sections/admin/Grids/ConversionFunnel/FunnelGrid';
import SourceWiseTraffic from 'sections/admin/Grids/ConversionFunnel/SourceWiseTraffic';

const FunnelView = () => {
  return (
    <Box
      pt={{ base: '130px', md: '80px', xl: '80px' }}
      h={{ base: 'auto', xl: 'calc(100vh - 50px)' }}
      boxSizing="border-box"
      display={{ base: 'flex', xl: 'grid' }}
      flexDirection="column"
      gridTemplateColumns={{ xl: 'repeat(2, minmax(0, 1fr))' }}
      gridTemplateRows={{ xl: '1fr 1fr' }}
      gap={{ base: '16px', xl: '12px' }}
      overflow={{ base: 'visible', xl: 'hidden' }}
    >
      <Box h={{ base: '420px', xl: '100%' }} minH="0" overflow="hidden">
        <FunnelGrid />
      </Box>
      <Box h={{ base: '420px', xl: '100%' }} minH="0" overflow="hidden">
        <SourceWiseSale />
      </Box>
      <Box
        h={{ base: '420px', xl: '100%' }}
        minH="0"
        overflow="hidden"
        gridColumn={{ xl: '1 / -1' }}
      >
        <SourceWiseTraffic />
      </Box>
    </Box>
  );
};

export default FunnelView;