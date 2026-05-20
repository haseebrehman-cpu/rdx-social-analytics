import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import TikTokCompaignGrid from 'sections/admin/Grids/TikTokCompaign/TikTokCompaignGrid';
import TiktokCompaignFilters from 'sections/admin/Filters/TiktokCompaignFilters';

const TiktokCompaign = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
        alignItems="center"
        backgroundColor="#131B3D"
        p={4}
        borderRadius="12px"
        border="1px solid rgba(255, 255, 255, 0.06)"
        boxShadow="0 4px 16px rgba(0, 0, 0, 0.25)"
      >
        <Box>
          <TiktokCompaignFilters />
        </Box>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <Box>
          <TikTokCompaignGrid />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default TiktokCompaign;
