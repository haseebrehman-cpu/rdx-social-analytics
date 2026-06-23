import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import MtdAchievedFinalGrid from 'sections/admin/Grids/ChannelPerformance/MtdAchievedFinalGrid';
import MtdFinalTargetRegion from 'sections/admin/Grids/ChannelPerformance/MtdFinalTargetRegion';
import MtdFinalTargetChannel from 'sections/admin/Grids/ChannelPerformance/MtdFinalTargetChannel';

const ReportView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <MtdAchievedFinalGrid />
        <MtdFinalTargetRegion />
        <MtdFinalTargetChannel />
      </SimpleGrid>
    </Box>
  );
};

export default ReportView;
