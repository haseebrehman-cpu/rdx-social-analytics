import { Box, SimpleGrid, useTheme } from '@chakra-ui/react';
import DropdownField from 'components/fields/dropdownField';
import { useState } from 'react';
import ReportBaseGrid from 'sections/admin/Grids/ChannelPerformance/ReportBaseGrid';

const conversionTypeOptions = [
  { value: 'first_click', label: 'First Click' },
  { value: 'last_click', label: 'Last Click' },
];

const ReportBaseView = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [conversionType, setConversionType] = useState('first_click');
  const handleConversionTypeChange = (event) => {
    setConversionType(event.target.value);
  };
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
        alignItems="center"
        backgroundColor={isDark ? '#131B3D' : '#FFFFFF'}
        p={{ base: 2, md: 3 }}
        borderRadius="12px"
        border={`1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`}
        boxShadow={`0 4px 16px ${isDark ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.05)'}`}
        display="flex"
        justifyContent="flex-end"
      >
        <DropdownField
          value={conversionType}
          onChange={handleConversionTypeChange}
          options={conversionTypeOptions}
          labelId="conversion-type-label"
          id="conversion-type"
        />
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <ReportBaseGrid />
      </SimpleGrid>
    </Box>
  );
};

export default ReportBaseView;
