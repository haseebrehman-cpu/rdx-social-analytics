import { Card, Box, Flex } from '@chakra-ui/react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import React, { useState } from 'react';

const ConversionDashboardDataFilters = () => {
  const regions = ['AE', 'CA', 'EU', 'UK', 'USA'];
  const channels = ['Affiliate', 'Email', 'Paid', 'Non-Attributed', 'Organic'];

  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedChannel, setSelectedChannel] = useState('');

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleChannelChange = (event) => {
    setSelectedChannel(event.target.value);
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
            <InputLabel id="channel-select-label">Channel</InputLabel>
            <Select
              labelId="channel-select-label"
              id="channel-select"
              value={selectedChannel}
              label="Channel"
              onChange={handleChannelChange}
              sx={selectStyles}
              MenuProps={menuProps}
            >
              {channels.map((channel) => (
                <MenuItem key={channel} value={channel}>
                  {channel}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Flex>
    </Card>
  );
};

export default ConversionDashboardDataFilters;
