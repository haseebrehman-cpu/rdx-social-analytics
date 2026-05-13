import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import OrderSessionGraph from 'sections/admin/Charts/OrderSessionGraph';
import WeeklyOrganicFilters from 'sections/admin/Filters/WeeklyOrganicFilters';
import OrderSessionGrid from 'sections/admin/Grids/WeeklyOrganic/OrderSessionGrid';

export default function WeeklyOrganic() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <WeeklyOrganicFilters />
        <OrderSessionGraph />
        <OrderSessionGrid />
      </SimpleGrid>
    </Box>
  );
}
