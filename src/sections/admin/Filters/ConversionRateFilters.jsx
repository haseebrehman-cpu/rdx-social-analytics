import { Card, Box, Flex } from '@chakra-ui/react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';

const ConversionRateFilters = () => {
  const timeFrames = [
    '2026-1',
    '2026-2',
    '2026-3',
    '2026-4',
    '2026-5',
    '2026-6',
    '2026-7',
    '2026-8',
    '2026-9',
    '2026-10',
    '2026-11',
    '2026-12',
  ];

  const [selectedTimeFrame, setSelectedTimeFrame] = useState('');

  const handleTimeFrameChange = (event) => {
    setSelectedTimeFrame(event.target.value);
  };

  const selectStyles = {
    borderRadius: '8px',
  };

  const menuProps = {
    PaperProps: {
      sx: {
        bgcolor: '#0B1437',
        '& .MuiMenuItem-root': {
          color: 'white',
          '&:hover': {
            bgcolor: '#2c5282',
          },
          '&.Mui-selected': {
            bgcolor: '#2b6cb0',
            '&:hover': {
              bgcolor: '#3182ce',
            },
          },
        },
      },
    },
  };

  return (
    <Card w="100%" h="100%">
      <Flex
        gap={4}
        alignItems="center"
        flexWrap="wrap"
        justifyContent="flex-end"
      >
        <Box minW="200px">
          <FormControl fullWidth size="small">
            <InputLabel id="time-frame-select-label">Time Frame</InputLabel>
            <Select
              labelId="time-frame-select-label"
              id="time-frame-select"
              value={selectedTimeFrame}
              label="Time Frame"
              onChange={handleTimeFrameChange}
              sx={selectStyles}
              MenuProps={menuProps}
            >
              {timeFrames.map((timeFrame) => (
                <MenuItem key={timeFrame} value={timeFrame}>
                  {timeFrame}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Flex>
    </Card>
  );
};

export default ConversionRateFilters;
