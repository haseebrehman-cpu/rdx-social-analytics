import React from 'react';

import { Box, SimpleGrid } from '@chakra-ui/react';
import QuantityOrderedGrid from 'sections/admin/Grids/ProductMix/QuantityOrderedGrid';
import AverageSellingGrid from 'sections/admin/Grids/ProductMix/AverageSellingGrid';
import RegionWiseGrid from 'sections/admin/Grids/ProductMix/RegionWiseGrid';
import GrossSaleGrid from 'sections/admin/Grids/ProductMix/GrossSaleGrid';
import AvgItemOrderGrid from 'sections/admin/Grids/ProductMix/AvgItemOrderGrid';
import QuantityShareGrid from 'sections/admin/Grids/ProductMix/QuantityShareGrid';

export default function ProductMix() {
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <QuantityOrderedGrid />
        <AverageSellingGrid />
        <RegionWiseGrid />
        <GrossSaleGrid />
        <AvgItemOrderGrid />
        <QuantityShareGrid />
      </SimpleGrid>
    </Box>
  );
}
