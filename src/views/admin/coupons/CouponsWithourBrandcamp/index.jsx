import React from 'react'
import { Box } from '@chakra-ui/react'
import CouponsWithoutBrandcamp from 'sections/admin/Grids/Coupons/CouponsWithoutBrandcamp'

const CouponsWithoutBrandcampView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <CouponsWithoutBrandcamp />
    </Box>
  )
}

export default CouponsWithoutBrandcampView