import React from 'react';
import { Box } from '@chakra-ui/react';
import RegionWiseSum from 'sections/admin/Grids/Coupons/RegionWiseSum';

const RegionWiseSumView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <RegionWiseSum />
    </Box>
  );
};

export default RegionWiseSumView;
