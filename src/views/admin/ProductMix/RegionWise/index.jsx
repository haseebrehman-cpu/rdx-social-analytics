import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react';
import RegionWiseGrid from 'sections/admin/Grids/ProductMix/RegionWiseGrid';
const RegionWiseView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <RegionWiseGrid />
      </SimpleGrid>
    </Box>
  )
}

export default RegionWiseView