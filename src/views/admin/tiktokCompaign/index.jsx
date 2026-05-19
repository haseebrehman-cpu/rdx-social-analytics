import { Box } from '@chakra-ui/react';
import React from 'react';
import TikTokCompaignGrid from 'sections/admin/Grids/TikTokCompaign/TikTokCompaignGrid';

const TiktokCompaign = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <TikTokCompaignGrid />
    </Box>
  );
};

export default TiktokCompaign;
