import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import NewsLetterGrid from 'sections/admin/Grids/NewsLetter/NewsLetterGrid';
import CampaignPerformance from 'sections/admin/Grids/NewsLetter/CampaignPerformance';
import NewsLetterFilters from 'sections/admin/Filters/NewsLetterFilters';

const NewsLetters = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2, '2xl': 1 }}
        gap="20px"
        mb="20px"
        alignItems="center"
        backgroundColor="#131B3D"
        p={4}
        borderRadius="12px"
        border="1px solid rgba(255, 255, 255, 0.06)"
        boxShadow="0 4px 16px rgba(0, 0, 0, 0.25)"
      >
        <Box>
          <NewsLetterFilters />
        </Box>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <NewsLetterGrid />
        <CampaignPerformance />
      </SimpleGrid>
    </Box>
  );
};

export default NewsLetters;
