import { Card, Box, Flex } from '@chakra-ui/react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';

const NewsLetterFilters = () => {
  const weeks = Array.from({ length: 10 }, (_, i) => i + 1);
  const months = [
    '202501',
    '202502',
    '202503',
    '202504',
    '202505',
    '202506',
    '202507',
    '202508',
    '202509',
    '202510',
    '202511',
    '202512',
  ];
  const regions = ['AE', 'CA', 'EU', 'UK', 'USA'];
  const campaignNames = [
    'Campaign 1',
    'Campaign 2',
    'Campaign 3',
    'Campaign 4',
    'Campaign 5',
  ];

  const [selectedWeek, setSelectedWeek] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState('');

  const handleWeekChange = (event) => {
    setSelectedWeek(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleCampaignChange = (event) => {
    setSelectedCampaign(event.target.value);
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
            <InputLabel id="month-select-label">Month</InputLabel>
            <Select
              labelId="month-select-label"
              id="month-select"
              value={selectedMonth}
              label="Month"
              onChange={handleMonthChange}
              sx={selectStyles}
              MenuProps={menuProps}
            >
              {months.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
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
            <InputLabel id="campaign-select-label">Campaign Name</InputLabel>
            <Select
              labelId="campaign-select-label"
              id="campaign-select"
              value={selectedCampaign}
              label="Campaign Name"
              onChange={handleCampaignChange}
              sx={selectStyles}
              MenuProps={menuProps}
            >
              {campaignNames.map((campaign) => (
                <MenuItem key={campaign} value={campaign}>
                  {campaign}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Flex>
    </Card>
  );
};

export default NewsLetterFilters;
