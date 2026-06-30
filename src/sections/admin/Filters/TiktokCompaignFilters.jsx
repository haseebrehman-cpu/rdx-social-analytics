import { Card, Box, Flex } from '@chakra-ui/react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';

const TiktokCompaignFilters = () => {
  const weeks = Array.from({ length: 10 }, (_, i) => i + 1);

  const [selectedWeek, setSelectedWeek] = useState('');

  const handleWeekChange = (event) => {
    setSelectedWeek(event.target.value);
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
            <InputLabel id="week-select-label">Week</InputLabel>
            <Select
              labelId="week-select-label"
              id="week-select"
              value={selectedWeek}
              label="Week"
              onChange={handleWeekChange}
              sx={{ borderRadius: '8px' }}
              MenuProps={{
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
              }}
            >
              {weeks.map((week) => (
                <MenuItem key={week} value={week}>
                  {week}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Flex>
    </Card>
  );
};

export default TiktokCompaignFilters;
