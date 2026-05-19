import { Box } from '@chakra-ui/react';
import React from 'react';
import NewsLetterGrid from 'sections/admin/Grids/NewsLetter/NewsLetterGrid';

const NewsLetters = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <NewsLetterGrid />
    </Box>
  );
};

export default NewsLetters;
