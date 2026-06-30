import { Card, Box, Flex } from '@chakra-ui/react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';

const FBDataFilters = () => {
  const weeks = Array.from({ length: 10 }, (_, i) => i + 1);
  const videoTitles = [
    'Video Title 1',
    'Video Title 2',
    'Video Title 3',
    'Video Title 4',
    'Video Title 5',
  ];

  const [selectedWeek, setSelectedWeek] = useState('');
  const [selectedVideoTitle, setSelectedVideoTitle] = useState('');

  const handleWeekChange = (event) => {
    setSelectedWeek(event.target.value);
  };

    const handleVideoTitleChange = (event) => {
    setSelectedVideoTitle(event.target.value);
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
        {/* <Box minW="200px">
          <TextField
            fullWidth
            size="small"
            label="Date"
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{borderRadius: '8px'}}
          />
        </Box> */}

        <Box minW="200px">
          <FormControl fullWidth size="small">
            <InputLabel id="week-select-label">Week</InputLabel>
            <Select
              labelId="week-select-label"
              id="week-select"
              value={selectedWeek}
              label="Week"
              onChange={handleWeekChange}
              sx={selectStyles}
              MenuProps={menuProps}
            >
              {weeks.map((week) => (
                <MenuItem key={week} value={week}>
                  {week}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box minW="200px">
          <FormControl fullWidth size="small">
            <InputLabel id="video-title-select-label">Video Title</InputLabel>
            <Select
              labelId="video-title-select-label"
              id="video-title-select"
              value={selectedVideoTitle}
              label="Video Title"
              onChange={handleVideoTitleChange}
              sx={selectStyles}
              MenuProps={menuProps}
            >
              {videoTitles.map((videoTitle) => (
                <MenuItem key={videoTitle} value={videoTitle}>
                  {videoTitle}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Flex>
    </Card>
  );
};

export default FBDataFilters;
