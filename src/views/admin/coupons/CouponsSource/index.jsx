import React from 'react';
import { Box, SimpleGrid, useTheme } from '@chakra-ui/react';
import CouponSource from 'sections/admin/Grids/Coupons/CouponSource';
import CouponsFilters from 'sections/admin/Filters/CouponsFilters';

const CouponsSourceView = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
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
          <CouponsFilters />
        </Box>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <CouponSource />
      </SimpleGrid>
    </Box>
  );
};

export default CouponsSourceView;
