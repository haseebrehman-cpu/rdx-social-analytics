import React from 'react';
import { Box } from '@chakra-ui/react';
import ConversionRateGrid from 'sections/admin/Grids/ConversionRate/ConversionRateGrid';
// import IconBox from 'components/icons/IconBox';
// import { MdBarChart } from 'react-icons/md';
// import MiniStatistics from 'components/card/MiniStatistics';
// import TotalSpent from '../default/components/TotalSpent';
// import WeeklyRevenue from '../default/components/WeeklyRevenue';

const ConversionRate = () => {
  // const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  // const brandColor = useColorModeValue('brand.500', 'white');

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <ConversionRateGrid />
      {/* <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="Conversion Rate"
          value="10%"
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid> */}
    </Box>
  );
};

export default ConversionRate;
