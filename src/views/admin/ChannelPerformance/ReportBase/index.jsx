import { Box, SimpleGrid } from '@chakra-ui/react';
import ReportBaseGrid from 'sections/admin/Grids/ChannelPerformance/ReportBaseGrid';

const ReportBaseView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <ReportBaseGrid />
      </SimpleGrid>
    </Box>
  )
}

export default ReportBaseView