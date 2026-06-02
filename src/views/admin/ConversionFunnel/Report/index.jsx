import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { useTheme } from '@mui/material/styles';
import SourceWiseTraffic from 'sections/admin/Grids/ConversionFunnel/Report/SourceWiseTraffic';
import SourceWiseSale from 'sections/admin/Grids/ConversionFunnel/Report/SourceWiseSale';
import FunnelGrid from 'sections/admin/Grids/ConversionFunnel/Report/FunnelGrid';
import ConversionFunnelReportFilters from 'sections/admin/Filters/ConversionFunnelReportFilters';
import { Typography } from '@mui/material';
const FunnelView = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }} boxSizing="border-box">
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2, '2xl': 2 }}
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
        <ConversionFunnelReportFilters />
      </SimpleGrid>
      <Box minH="0" overflow="hidden" py={2}>
        <FunnelGrid />
      </Box>
      <Box minH="0" overflow="hidden" py={2}>
        <SourceWiseSale />
      </Box>
      <Box minH="0" overflow="hidden" py={2}>
        <SourceWiseTraffic />
      </Box>
    </Box>
  );
};

export default FunnelView;
