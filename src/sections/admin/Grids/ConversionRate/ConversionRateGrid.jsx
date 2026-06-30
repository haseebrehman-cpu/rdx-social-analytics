import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  DataGridPremium,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarQuickFilter,
  useGridApiRef,
} from '@mui/x-data-grid-premium';
import { getDataGridStyles } from 'utils/gridStyles';

function CustomToolbar() {
  return (
    <GridToolbarContainer
      sx={{
        p: 1.25,
        gap: 1,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mr: 'auto' }}>
        Conversion Rate
      </Typography>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      <GridToolbarQuickFilter
        debounceMs={500}
        sx={{
          pb: 0,
          '& .MuiInputBase-root': { width: { xs: '100%', sm: 240 } },
        }}
      />
    </GridToolbarContainer>
  );
}

const rows = [
  {
    id: 1,
    region: 'UK',
    country: 'United Kingdom',
    currency: 'GBP',
    region_code: 'UK',
    conversion_code: 'GBP',
    rate: 1.0,
    start_date: new Date('2026-04-12'),
    end_date: new Date('2026-04-18'),
    month: 'January',
    year: 2026,
    year_month: '2026-01',
  },
  {
    id: 2,
    region: 'US',
    country: 'United States',
    currency: 'USD',
    region_code: 'US',
    conversion_code: 'USD',
    rate: 1.0,
    start_date: new Date('2026-04-18'),
    end_date: new Date('2026-04-22'),
    month: 'February',
    year: 2026,
    year_month: '2026-02',
  },
  {
    id: 3,
    region: 'EU',
    country: 'Germany',
    currency: 'EUR',
    region_code: 'EU',
    conversion_code: 'EUR',
    rate: 1.0,
    start_date: new Date('2026-04-22'),
    end_date: new Date('2026-04-28'),
    month: 'March',
    year: 2026,
    year_month: '2026-03',
  },
  {
    id: 4,
    region: 'IT',
    country: 'Italy',
    currency: 'EUR',
    region_code: 'IT',
    conversion_code: 'EUR',
    rate: 1.0,
    start_date: new Date('2026-04-28'),
    end_date: new Date('2026-05-04'),
    month: 'April',
    year: 2026,
    year_month: '2026-04',
  },
  {
    id: 5,
    region: 'DE',
    country: 'Germany',
    currency: 'EUR',
    region_code: 'DE',
    conversion_code: 'EUR',
    rate: 1.0,
    start_date: new Date('2026-05-02'),
    end_date: new Date('2026-05-08'),
    month: 'May',
    year: 2026,
    year_month: '2026-05',
  },
  {
    id: 6,
    region: 'FR',
    country: 'France',
    currency: 'EUR',
    region_code: 'FR',
    conversion_code: 'EUR',
    rate: 1.0,
    start_date: new Date('2026-05-08'),
    end_date: new Date('2026-05-14'),
    month: 'June',
    year: 2026,
    year_month: '2026-06',
  },
];

const columns = [
  {
    field: 'country',
    headerName: 'Country',
    groupable: true,
    flex: 1,
  },
  {
    field: 'currency',
    headerName: 'Currency',
    flex: 1,
  },
  {
    field: 'region',
    headerName: 'Region',
    flex: 1,
  },
  {
    field: 'conversion_code',
    headerName: 'Conversion Code',
    groupable: true,
    flex: 1,
  },
  {
    field: 'rate',
    headerName: 'Rate',
    flex: 1,
  },
  {
    field: 'start_date',
    headerName: 'Start Date',
    type: 'date',
    flex: 1,
  },
  {
    field: 'end_date',
    headerName: 'End Date',
    type: 'date',
    flex: 1,
  },
  {
    field: 'month',
    headerName: 'Month',
    flex: 1,
  },
  {
    field: 'year',
    headerName: 'Year',
    flex: 1,
  },
  {
    field: 'year_month',
    headerName: 'Year Month',
    flex: 1,
  },
];

const ConversionRateGrid = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 'calc(100vh - 200px)', md: 'calc(100vh - 140px)' },
        minHeight: '400px',
        px: { xs: 2, sm: 3 },
        pt: 2,
        pb: 1.5,
        border: '1px solid',
        borderColor: isDark ? '#1F2937' : '#E5E7EB',
        bgcolor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <DataGridPremium
        label="Conversion Rate"
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        showToolbar
        pagination
        pageSizeOptions={[10, 25, 50, 100]}
        sx={getDataGridStyles(isDark, '100%')}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
};

export default ConversionRateGrid;
