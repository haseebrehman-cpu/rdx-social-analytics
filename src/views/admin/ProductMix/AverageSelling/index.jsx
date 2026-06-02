import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react';
import AverageSellingGrid from 'sections/admin/Grids/ProductMix/AverageSellingGrid';

const AverageSellingView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <AverageSellingGrid />
      </SimpleGrid>
    </Box>
  )
}

export default AverageSellingView