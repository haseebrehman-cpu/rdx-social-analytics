import { Card, Box, Flex } from '@chakra-ui/react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import React, { useState } from 'react';

const FBDataFilters = () => {
  const weeks = Array.from({ length: 10 }, (_, i) => i + 1);
  const regions = ['AE', 'CA', 'EU', 'UK', 'USA'];
  const youtubeTitles = [
    'Youtube Title 1',
    'Youtube Title 2',
    'Youtube Title 3',
    'Youtube Title 4',
    'Youtube Title 5',
  ];

  const [selectedWeek, setSelectedWeek] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedYoutubeTitle, setSelectedYoutubeTitle] = useState('');

  const handleWeekChange = (event) => {
    setSelectedWeek(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleYoutubeTitleChange = (event) => {
    setSelectedYoutubeTitle(event.target.value);
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
            <InputLabel id="region-select-label">Region</InputLabel>
            <Select
              labelId="region-select-label"
              id="region-select"
              value={selectedRegion}
              label="Region"
              onChange={handleRegionChange}
              sx={selectStyles}
              MenuProps={menuProps}
            >
              {regions.map((region) => (
                <MenuItem key={region} value={region}>
                  {region}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box minW="200px">
          <FormControl fullWidth size="small">
            <InputLabel id="youtube-title-select-label">
              Youtube Title
            </InputLabel>
            <Select
              labelId="youtube-title-select-label"
              id="youtube-title-select"
              value={selectedYoutubeTitle}
              label="Youtube Title"
              onChange={handleYoutubeTitleChange}
              sx={selectStyles}
              MenuProps={menuProps}
            >
              {youtubeTitles.map((youtubeTitle) => (
                <MenuItem key={youtubeTitle} value={youtubeTitle}>
                  {youtubeTitle}
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
