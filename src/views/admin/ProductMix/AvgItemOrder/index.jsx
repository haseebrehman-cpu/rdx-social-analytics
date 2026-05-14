import React from 'react'
import { Box } from '@chakra-ui/react'
import AvgItemOrderGrid from 'sections/admin/Grids/ProductMix/AvgItemOrderGrid'

const AvgItemOrderView = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <AvgItemOrderGrid />
    </Box>
  )
}

export default AvgItemOrderView