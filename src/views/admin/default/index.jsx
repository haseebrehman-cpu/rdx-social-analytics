import { Box, SimpleGrid } from '@chakra-ui/react';
import ChannelConsolidationGrid from 'sections/admin/Grids/ChannelPerformance/ChannelConsolidationGrid';
import TargetGrid from 'sections/admin/Grids/ChannelPerformance/TargetGrid';
import MarketingCostGrid from 'sections/admin/Grids/ChannelPerformance/MarketingCostGrid';
import ReportGrid from 'sections/admin/Grids/ChannelPerformance/ReportGrid';
import ReportBaseGrid from 'sections/admin/Grids/ChannelPerformance/ReportBaseGrid';

export default function ChannelPerformance() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <ChannelConsolidationGrid />
        <ReportBaseGrid />
        <TargetGrid />
        <MarketingCostGrid />
        <ReportGrid />
      </SimpleGrid>
    </Box>
  );
}
