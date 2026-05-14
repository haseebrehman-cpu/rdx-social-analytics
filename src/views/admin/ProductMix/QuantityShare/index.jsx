import React from 'react'
import { Box } from '@chakra-ui/react'
import QuantityShareGrid from 'sections/admin/Grids/ProductMix/QuantityShareGrid'

const QuantityShareView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <QuantityShareGrid />
    </Box>
  )
}

export default QuantityShareView