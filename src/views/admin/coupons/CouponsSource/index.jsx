import React from 'react';
import { Box } from '@chakra-ui/react';
import CouponSource from 'sections/admin/Grids/Coupons/CouponSource';

const CouponsSourceView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <CouponSource />
    </Box>
  );
};

export default CouponsSourceView;
