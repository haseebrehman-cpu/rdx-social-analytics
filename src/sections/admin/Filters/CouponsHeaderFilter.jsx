import { Card, Flex } from '@chakra-ui/react';
import { Button } from '@mui/material';
import { IoRefresh } from 'react-icons/io5';
import { MdUpload } from 'react-icons/md';
import { RiLoader2Fill } from 'react-icons/ri';

const CouponsHeaderFilter = ({ onLoadReport, onRefreshReport }) => {
  return (
    <Card w="100%" h="100%">
      <Flex
        gap={4}
        alignItems="center"
        flexWrap="wrap"
        justifyContent="flex-end"
      >
        <Button variant="outlined" size="medium" onClick={onRefreshReport} sx={{ borderRadius: '8px' }} startIcon={<IoRefresh />}>Refresh Report</Button>
        <Button variant="outlined" size="medium" onClick={onLoadReport} sx={{ borderRadius: '8px' }} startIcon={<MdUpload />}>Upload File</Button>
        <Button
          variant="outlined"
          size="medium"
          onClick={onLoadReport}
          sx={{ borderRadius: '8px' }}
          color='primary'
          startIcon={<RiLoader2Fill />}
        >
          Load Report
        </Button>
      </Flex>
    </Card>
  );
};

export default CouponsHeaderFilter;
