import { Box, SimpleGrid } from '@chakra-ui/react';
import MarketingCostGrid from 'sections/admin/Grids/ChannelPerformance/MarketingCostGrid';

const MarketingCostView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <MarketingCostGrid />
      </SimpleGrid>
    </Box>
  )
}

export default MarketingCostView