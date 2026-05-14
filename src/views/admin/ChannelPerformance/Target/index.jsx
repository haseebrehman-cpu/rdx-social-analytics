import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react';
import TargetGrid from 'sections/admin/Grids/ChannelPerformance/TargetGrid';

const TargetView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <TargetGrid />
      </SimpleGrid>
    </Box>
  )
}

export default TargetView