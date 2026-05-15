import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import SalesAOV from 'sections/admin/Charts/ConversionFunnel/Dashboard/SalesAov';
import RegionWiseSales from 'sections/admin/Charts/ConversionFunnel/Dashboard/RegionWiseSales';

const SalesAOVView = () => {
  return (
    <Box
      pt={{ base: '130px', md: '80px', xl: '80px' }}
      pb={{ base: '20px', xl: '24px' }}
      boxSizing="border-box"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 3 }}
        gap="20px"
        mb="20px"
      >
        <Box
          w="100%"
          h={{ base: '420px', md: '460px', xl: '500px' }}
          p={{ base: 4, md: 5 }}
          sx={{
            backgroundColor: '#1D2939',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
          }}
        >
          <SalesAOV />
        </Box>
        <Box
          w="100%"
          h={{ base: '420px', md: '460px', xl: '500px' }}
          p={{ base: 4, md: 5 }}
          sx={{
            backgroundColor: '#1D2939',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
          }}
        >
          <RegionWiseSales />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default SalesAOVView;
