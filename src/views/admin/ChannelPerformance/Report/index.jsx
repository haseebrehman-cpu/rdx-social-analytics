import { Box, SimpleGrid } from '@chakra-ui/react';
import MtdAchievedFinalGrid from 'sections/admin/Grids/ChannelPerformance/MtdAchievedFinalGrid';
import MtdFinalTargetRegion from 'sections/admin/Grids/ChannelPerformance/MtdFinalTargetRegion';
import MtdFinalTargetChannel from 'sections/admin/Grids/ChannelPerformance/MtdFinalTargetChannel';
// import DropdownField from 'components/fields/dropdownField';
// import { useState } from 'react';
// import { useTheme } from '@mui/material';

const ReportView = () => {
  // const [reportType, setReportType] = useState('first_click');
  // const handleReportTypeChange = (event) => {
  //   setReportType(event.target.value);
  // };
  // const reportTypeOptions = [
  //   { value: 'first_click', label: 'First Click' },
  //   { value: 'last_click', label: 'Last Click' },
  // ];
  // const theme = useTheme();
  // const isDark = theme.palette.mode === 'dark';
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      {/* <SimpleGrid
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
          value={reportType}
          onChange={handleReportTypeChange}
          options={reportTypeOptions}
          labelId="report-type-label"
          id="report-type"
        />
      </SimpleGrid> */}
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
        gap="20px"
        mb="20px"
      >
        <MtdAchievedFinalGrid />
        <MtdFinalTargetRegion />
        <MtdFinalTargetChannel />
      </SimpleGrid>
    </Box>
  );
};

export default ReportView;
