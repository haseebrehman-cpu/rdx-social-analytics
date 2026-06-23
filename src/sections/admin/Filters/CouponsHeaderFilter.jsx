import { Card, Flex } from '@chakra-ui/react';
import { Button } from '@mui/material';
import React from 'react';
import { IoRefresh } from 'react-icons/io5';

const CouponsHeaderFilter = ({ onLoadReport }) => {
  return (
    <Card w="100%" h="100%">
      <Flex
        gap={4}
        alignItems="center"
        flexWrap="wrap"
        justifyContent="flex-end"
      >
        <Button
          variant="outlined"
          size="medium"
          onClick={onLoadReport}
          sx={{ borderRadius: '8px' }}
          color='primary'
          startIcon={<IoRefresh />}
        >
          Load Report
        </Button>
      </Flex>
    </Card>
  );
};

export default CouponsHeaderFilter;
