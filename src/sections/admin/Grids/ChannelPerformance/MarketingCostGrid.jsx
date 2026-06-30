import { Box, Typography } from '@mui/material';
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
import { useTheme } from '@mui/material/styles';

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
        Marketing Cost
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
    mtd_sales: 1000,
    google_cost: 1000,
    sa360_cost: 1000,
    facebook_cost: 1000,
    snap_chat_cost: 1000,
    pinterest: 1000,
    criteo: 1000,
    tiktok: 1000,
    affiliate: 1000,
    klaviyo: 1000,
    coupon: 1000,
    meta: 1000,
    stack_adapt: 1000,
    mntn: 1000,
    google: 1000,
    cost_without_branding: 1000,
    acos_without_branding: 1000,
    cost_without_sa360: 1000,
    cost_without_sa360_cost: 1000,
    cost_with_branding: 1000,
    acos_with_branding: 1000,
    cost_without_coupons: 1000,
    acos_without_coupons: 1000,
  },
  {
    id: 2,
    region: 'EU',
    mtd_sales: 1000,
    google_cost: 1000,
    sa360_cost: 1000,
    facebook_cost: 1000,
    snap_chat_cost: 1000,
    pinterest: 1000,
    criteo: 1000,
    tiktok: 1000,
    affiliate: 1000,
    klaviyo: 1000,
    coupon: 1000,
    meta: 1000,
    stack_adapt: 1000,
    mntn: 1000,
    google: 1000,
    cost_without_branding: 1000,
    acos_without_branding: 1000,
    cost_without_sa360: 1000,
    cost_without_sa360_cost: 1000,
    cost_with_branding: 1000,
    acos_with_branding: 1000,
    cost_without_coupons: 1000,
    acos_without_coupons: 1000,
  },
  {
    id: 3,
    region: 'US',
    channel: 'Facebook',
    mtd_sales: 1000,
    google_cost: 1000,
    sa360_cost: 1000,
    facebook_cost: 1000,
    snap_chat_cost: 1000,
    pinterest: 1000,
    criteo: 1000,
    tiktok: 1000,
    affiliate: 1000,
    klaviyo: 1000,
    coupon: 1000,
    meta: 1000,
    stack_adapt: 1000,
    mntn: 1000,
    google: 1000,
    cost_without_branding: 1000,
    acos_without_branding: 1000,
    cost_without_sa360: 1000,
    cost_without_sa360_cost: 1000,
    cost_with_branding: 1000,
    acos_with_branding: 1000,
    cost_without_coupons: 1000,
    acos_without_coupons: 1000,
  },
  {
    id: 4,
    region: 'DE',
    channel: 'Instagram',
    mtd_sales: 1000,
    google_cost: 1000,
    sa360_cost: 1000,
    facebook_cost: 1000,
    snap_chat_cost: 1000,
    pinterest: 1000,
    criteo: 1000,
    tiktok: 1000,
    affiliate: 1000,
    klaviyo: 1000,
    coupon: 1000,
    meta: 1000,
    stack_adapt: 1000,
    mntn: 1000,
    google: 1000,
    cost_without_branding: 1000,
    acos_without_branding: 1000,
    cost_without_sa360: 1000,
    cost_without_sa360_cost: 1000,
    cost_with_branding: 1000,
    acos_with_branding: 1000,
    cost_without_coupons: 1000,
    acos_without_coupons: 1000,
  },
  {
    id: 5,
    region: 'FR',
    channel: 'Twitter',
    type: 'Paid',
    channel_final: 'Twitter',
    mtd_sales: 1000,
    google_cost: 1000,
    sa360_cost: 1000,
    facebook_cost: 1000,
    snap_chat_cost: 1000,
    pinterest: 1000,
    criteo: 1000,
    tiktok: 1000,
    affiliate: 1000,
    klaviyo: 1000,
    coupon: 1000,
    meta: 1000,
    stack_adapt: 1000,
    mntn: 1000,
    google: 1000,
    cost_without_branding: 1000,
    acos_without_branding: 1000,
    cost_without_sa360: 1000,
    cost_without_sa360_cost: 1000,
    cost_with_branding: 1000,
    acos_with_branding: 1000,
    cost_without_coupons: 1000,
    acos_without_coupons: 1000,
  },
  {
    id: 6,
    region: 'CS',
    channel: 'TikTok',
    type: 'Paid',
    channel_final: 'TikTok',
    mtd_sales: 1000,
    google_cost: 1000,
    sa360_cost: 1000,
    facebook_cost: 1000,
    snap_chat_cost: 1000,
    pinterest: 1000,
    criteo: 1000,
    tiktok: 1000,
    affiliate: 1000,
    klaviyo: 1000,
    coupon: 1000,
    meta: 1000,
    stack_adapt: 1000,
    mntn: 1000,
    google: 1000,
    cost_without_branding: 1000,
    acos_without_branding: 1000,
    cost_without_sa360: 1000,
    cost_without_sa360_cost: 1000,
    cost_with_branding: 1000,
    acos_with_branding: 1000,
    cost_without_coupons: 1000,
    acos_without_coupons: 1000,
  },
  {
    id: 7,
    region: 'FR',
    channel: 'YouTube',
    type: 'Paid',
    channel_final: 'YouTube',
    mtd_sales: 1000,
    google_cost: 1000,
    sa360_cost: 1000,
    facebook_cost: 1000,
    snap_chat_cost: 1000,
    pinterest: 1000,
    criteo: 1000,
    tiktok: 1000,
    affiliate: 1000,
    klaviyo: 1000,
    coupon: 1000,
    meta: 1000,
    stack_adapt: 1000,
    mntn: 1000,
    google: 1000,
    cost_without_branding: 1000,
    acos_without_branding: 1000,
    cost_without_sa360: 1000,
    cost_without_sa360_cost: 1000,
    cost_with_branding: 1000,
    acos_with_branding: 1000,
    cost_without_coupons: 1000,
    acos_without_coupons: 1000,
  },
  {
    id: 8,
    region: 'IT',
    channel: 'Pinterest',
    type: 'Paid',
    channel_final: 'Pinterest',
    mtd_sales: 1000,
    google_cost: 1000,
    sa360_cost: 1000,
    facebook_cost: 1000,
    snap_chat_cost: 1000,
    pinterest: 1000,
    criteo: 1000,
    tiktok: 1000,
    affiliate: 1000,
    klaviyo: 1000,
    coupon: 1000,
    meta: 1000,
    stack_adapt: 1000,
    mntn: 1000,
    google: 1000,
    cost_without_branding: 1000,
    acos_without_branding: 1000,
    cost_without_sa360: 1000,
    cost_without_sa360_cost: 1000,
    cost_with_branding: 1000,
    acos_with_branding: 1000,
    cost_without_coupons: 1000,
    acos_without_coupons: 1000,
  },
];

const sumField = (field) =>
  rows.reduce((acc, row) => acc + (Number(row[field]) || 0), 0);

const totalRow = {
  id: 'grand-total',
  region: 'Grand Total',
  mtd_sales: sumField('mtd_sales'),
  google_cost: sumField('google_cost'),
  sa360_cost: sumField('sa360_cost'),
  facebook_cost: sumField('facebook_cost'),
  snap_chat_cost: sumField('snap_chat_cost'),
  pinterest: sumField('pinterest'),
  criteo: sumField('criteo'),
  tiktok: sumField('tiktok'),
  affiliate: sumField('affiliate'),
  klaviyo: sumField('klaviyo'),
  coupon: sumField('coupon'),
  meta: sumField('meta'),
  stack_adapt: sumField('stack_adapt'),
  mntn: sumField('mntn'),
  google: sumField('google'),
  cost_without_branding: sumField('cost_without_branding'),
  acos_without_branding: sumField('acos_without_branding'),
  cost_without_sa360: sumField('cost_without_sa360'),
  cost_without_sa360_cost: sumField('cost_without_sa360_cost'),
  cost_with_branding: sumField('cost_with_branding'),
  acos_with_branding: sumField('acos_with_branding'),
  cost_without_coupons: sumField('cost_without_coupons'),
  acos_without_coupons: sumField('acos_without_coupons'),
};

const columns = [
  {
    field: 'region',
    headerName: 'Region',
    groupable: true,
  },
  {
    field: 'mtd_sales',
    headerName: 'MTD Sales',
    minWidth: 100,
  },
  {
    field: 'google_cost',
    headerName: 'Google Cost',
    minWidth: 120,
  },
  {
    field: 'sa360_cost',
    headerName: 'SA360 Cost',
    groupable: true,
  },
  {
    field: 'facebook_cost',
    headerName: 'Facebook Cost',
    minWidth: 150,
  },
  {
    field: 'snap_chat_cost',
    headerName: 'Snap Chat Cost',
    minWidth: 200,
  },
  {
    field: 'pinterest',
    headerName: 'Pinterest',
  },
  {
    field: 'criteo',
    headerName: 'Criteo',
  },
  {
    field: 'tiktok',
    headerName: 'TikTok',
  },
  {
    field: 'affiliate',
    headerName: 'Affiliate',
  },
  {
    field: 'klaviyo',
    headerName: 'Klaviyo',
  },
  {
    field: 'coupon',
    headerName: 'Coupon',
  },
  {
    field: 'meta',
    headerName: 'Meta',
  },
  {
    field: 'stack_adapt',
    headerName: 'Stack Adapt',
    minWidth: 120,
  },
  {
    field: 'mntn',
    headerName: 'MNTN',
  },
  {
    field: 'google',
    headerName: 'Google',
  },
  {
    field: 'cost_without_branding',
    headerName: 'Cost Without Branding',
    minWidth: 200,
  },
  {
    field: 'acos_without_branding',
    headerName: 'ACOS Without Branding',
    minWidth: 200,
  },
  {
    field: 'cost_without_sa360',
    headerName: 'Cost Without SA360',
    minWidth: 200,
  },
  {
    field: 'cost_without_sa360_cost',
    headerName: 'Cost Without SA360 Cost',
    minWidth: 200,
  },
  {
    field: 'cost_with_branding',
    headerName: 'Cost With Branding',
    minWidth: 200,
  },
  {
    field: 'acos_with_branding',
    headerName: 'ACOS With Branding',
    minWidth: 200,
  },
  {
    field: 'cost_without_coupons',
    headerName: 'Cost Without Coupons',
    minWidth: 200,
    },
  {
    field: 'acos_without_coupons',
    headerName: 'ACOS Without Coupons',
    minWidth: 200,
  },
];
const MarketingCostGrid = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 'calc(100vh - 200px)', md: 'calc(100vh - 130px)' },
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
        label="Marketing Cost"
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        pinnedRows={{ bottom: [totalRow] }}
        pagination
        pageSizeOptions={[10, 25, 50, 100]}
        sx={{
          ...getDataGridStyles(isDark, '100%'),
          '& .MuiDataGrid-row--pinned': {
            backgroundColor: isDark
              ? 'rgba(255, 255, 255, 0.06) !important'
              : 'rgba(0, 0, 0, 0.04) !important',
          },
          '& .MuiDataGrid-row--pinned .MuiDataGrid-cell': {
            fontWeight: 700,
            color: isDark ? '#ffffff' : '#101828',
          },
        }}
        showToolbar
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
};

export default MarketingCostGrid;
