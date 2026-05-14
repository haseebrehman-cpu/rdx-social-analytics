import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react';
import ReportGrid from 'sections/admin/Grids/ChannelPerformance/ReportGrid';

const ReportView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <ReportGrid />
      </SimpleGrid>
    </Box>
  )
}

export default ReportView