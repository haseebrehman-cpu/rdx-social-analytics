import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react';
import QuantityOrderedGrid from 'sections/admin/Grids/ProductMix/QuantityOrderedGrid';

const QuantityOrderedView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <QuantityOrderedGrid />
      </SimpleGrid>
    </Box>
  )
}

export default QuantityOrderedView