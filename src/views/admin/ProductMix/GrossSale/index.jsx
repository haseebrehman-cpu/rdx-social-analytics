import React from 'react'
import { Box } from '@chakra-ui/react'
import GrossSaleGrid from 'sections/admin/Grids/ProductMix/GrossSaleGrid'

const GrossSaleView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <GrossSaleGrid />
    </Box>
  )
}

export default GrossSaleView