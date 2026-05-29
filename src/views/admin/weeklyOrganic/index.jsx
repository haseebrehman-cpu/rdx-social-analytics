import { Box, SimpleGrid, useTheme } from '@chakra-ui/react';
import { Typography } from '@mui/material';
import React from 'react';
import OrderSessionGraph from 'sections/admin/Charts/OrderSession/OrderSessionGraph';
import WeeklyOrganicFilters from 'sections/admin/Filters/WeeklyOrganicFilters';
import OrderSessionGrid from 'sections/admin/Grids/WeeklyOrganic/OrderSessionGrid';

export default function WeeklyOrganic() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 2 }}
        gap="20px"
        mb="20px"
        alignItems="center"
        backgroundColor={isDark ? '#131B3D' : '#FFFFFF'}
        p={4}
        borderRadius="12px"
        border={`1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`}
        boxShadow={`0 4px 16px ${isDark ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.05)'}`}
      >
        <Box>
          <Typography variant="body1">Filters</Typography>
        </Box>
        <Box>
          <WeeklyOrganicFilters />
        </Box>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <Box
          w="100%"
          h={{ base: '420px', md: '460px', xl: '500px' }}
          p={{ base: 4, md: 5 }}
          sx={{
            backgroundColor:isDark ? '#131B3D' : '#FFFFFF',
            borderRadius: '12px',
            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
            boxShadow: `0 4px 16px ${isDark ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.05)'}`,
          }}
        >
          <OrderSessionGraph />
        </Box>
      </SimpleGrid>
      <OrderSessionGrid />
    </Box>
  );
}
