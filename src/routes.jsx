import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdLocalOffer,
  MdFilterAlt,
  MdTrendingUp,
  MdShare,
  MdCampaign,
  MdAssessment,
  MdAttachMoney,
  MdCompareArrows,
  MdDashboard,
  MdDiscount,
  MdFlag,
  MdInventory2,
  MdMarkEmailRead,
  MdMovie,
  MdPaid,
  MdPercent,
  MdPieChart,
  MdPublic,
  MdQueryStats,
  MdSell,
  MdShoppingBag,
  MdShoppingCartCheckout,
  MdShowChart,
  MdSummarize,
  MdTableChart,
  MdVideoLibrary,
} from 'react-icons/md';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

// Auth Imports
// import SignInCentered from 'views/auth/signIn';
import WeeklyOrganic from 'views/admin/weeklyOrganic';
import NewsLetters from 'views/admin/newsLetters';
import FBData from 'views/admin/fbData';
import InstagramStories from 'views/admin/instagramStories';
import InstagramPosts from 'views/admin/InstagramPosts';
import YoutubeData from 'views/admin/youtubeData';
import TiktokOverview from 'views/admin/tiktokOverview';
import TiktokVideo from 'views/admin/tiktokVideo';
import ConversionRate from 'views/admin/conversionRate';
import TargetView from 'views/admin/ChannelPerformance/Target';
import MarketingCostView from 'views/admin/ChannelPerformance/MarketingCost';
import ReportBaseView from 'views/admin/ChannelPerformance/ReportBase';
import ReportView from 'views/admin/ChannelPerformance/Report';
import ChannelConsolidationView from 'views/admin/ChannelPerformance/ChannelConsolidation/index';
import AverageSellingView from 'views/admin/ProductMix/AverageSelling/index';
import QuantityShareView from 'views/admin/ProductMix/QuantityShare/index';
import QuantityOrderedView from 'views/admin/ProductMix/QuantityOrdered';
import RegionWiseView from 'views/admin/ProductMix/RegionWise/index';
import GrossSaleView from 'views/admin/ProductMix/GrossSale/index';
import AvgItemOrderView from 'views/admin/ProductMix/AvgItemOrder/index';
import CouponsSourceView from 'views/admin/coupons/CouponsSource';
import RegionWiseSumView from 'views/admin/coupons/RegionWiseSum';
import CouponsWithoutBrandcampView from 'views/admin/coupons/CouponsWithourBrandcamp';
import FunnelView from 'views/admin/ConversionFunnel/Report';
import ConversionGridView from 'views/admin/ConversionFunnel/Dashboard/Data';
import ConversionChartsView from 'views/admin/ConversionFunnel/Dashboard/Charts';
import TiktokCompaign from 'views/admin/tiktokCompaign';

const routes = [
  {
    name: 'Conversion Rate Summary',
    layout: '/admin',
    path: '/conversion-rate-summary',
    icon: <Icon as={MdPercent} width="20px" height="20px" color="inherit" />,
    component: <ConversionRate />,
  },
  {
    name: 'Channel Performance',
    layout: '/admin',
    path: '/channel-performance',
    icon: <Icon as={MdAssessment} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'Channel Consolidation',
        layout: '/admin',
        path: '/channel-performance/channel-consolidation',
        icon: (
          <Icon
            as={MdCompareArrows}
            width="20px"
            height="20px"
            color="inherit"
          />
        ),
        component: <ChannelConsolidationView />,
      },
      {
        name: 'Report Base',
        layout: '/admin',
        path: '/channel-performance/report-base',
        icon: (
          <Icon as={MdTableChart} width="20px" height="20px" color="inherit" />
        ),
        component: <ReportBaseView />,
      },
      {
        name: 'Target',
        layout: '/admin',
        path: '/channel-performance/target',
        icon: <Icon as={MdFlag} width="20px" height="20px" color="inherit" />,
        component: <TargetView />,
      },
      {
        name: 'Final Report',
        layout: '/admin',
        path: '/channel-performance/final-report',
        icon: (
          <Icon as={MdSummarize} width="20px" height="20px" color="inherit" />
        ),
        component: <ReportView />,
      },
      {
        name: 'Marketing Cost',
        layout: '/admin',
        path: '/channel-performance/marketing-cost',
        icon: <Icon as={MdPaid} width="20px" height="20px" color="inherit" />,
        component: <MarketingCostView />,
      },
    ],
  },
  {
    name: 'Product Mix',
    layout: '/admin',
    icon: <Icon as={MdInventory2} width="20px" height="20px" color="inherit" />,
    secondary: true,
    collapse: true,
    items: [
      {
        name: 'Quantity Ordered',
        layout: '/admin',
        path: '/product-mix/quantity-ordered',
        icon: (
          <Icon
            as={MdShoppingCartCheckout}
            width="20px"
            height="20px"
            color="inherit"
          />
        ),
        component: <QuantityOrderedView />,
      },
      {
        name: 'Average Selling',
        layout: '/admin',
        path: '/product-mix/average-selling',
        icon: (
          <Icon as={MdAttachMoney} width="20px" height="20px" color="inherit" />
        ),
        component: <AverageSellingView />,
      },
      {
        name: 'Region Wise',
        layout: '/admin',
        path: '/product-mix/region-wise',
        icon: <Icon as={MdPublic} width="20px" height="20px" color="inherit" />,
        component: <RegionWiseView />,
      },
      {
        name: 'Gross Sale',
        layout: '/admin',
        path: '/product-mix/gross-sale',
        icon: <Icon as={MdSell} width="20px" height="20px" color="inherit" />,
        component: <GrossSaleView />,
      },
      {
        name: 'Avg Item Order',
        layout: '/admin',
        path: '/product-mix/avg-item-order',
        icon: (
          <Icon as={MdShoppingBag} width="20px" height="20px" color="inherit" />
        ),
        component: <AvgItemOrderView />,
      },
      {
        name: 'Quantity Share',
        layout: '/admin',
        path: '/product-mix/quantity-share',
        icon: (
          <Icon as={MdPieChart} width="20px" height="20px" color="inherit" />
        ),
        component: <QuantityShareView />,
      },
    ],
  },
  {
    name: 'Coupons',
    layout: '/admin',
    icon: <Icon as={MdLocalOffer} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'Coupons Source',
        layout: '/admin',
        path: '/coupons/coupons-source',
        icon: (
          <Icon as={MdLocalOffer} width="20px" height="20px" color="inherit" />
        ),
        component: <CouponsSourceView />,
      },
      {
        name: 'Region Wise Sum of applied discounts',
        layout: '/admin',
        path: '/coupons/region-wise-sum',
        icon: <Icon as={MdPublic} width="20px" height="20px" color="inherit" />,
        component: <RegionWiseSumView />,
      },
      {
        name: 'Coupons Without Brandcamp Cost',
        layout: '/admin',
        path: '/coupons/coupons-without-brandcamp-cost',
        icon: (
          <Icon as={MdDiscount} width="20px" height="20px" color="inherit" />
        ),
        component: <CouponsWithoutBrandcampView />,
      },
    ],
  },
  {
    name: 'Conversion Funnel',
    layout: '/admin',
    path: null,
    icon: <Icon as={MdFilterAlt} width="20px" height="20px" color="inherit" />,
    component: null,
    collapse: true,
    items: [
      {
        name: 'Report',
        layout: '/admin',
        path: '/conversion-funnel/report',
        icon: (
          <Icon as={MdQueryStats} width="20px" height="20px" color="inherit" />
        ),
        component: <FunnelView />,
      },
      {
        name: 'Dashboard',
        layout: '/admin',
        path: null,
        icon: (
          <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />
        ),
        component: null,
        secondary: true,
        collapse: true,
        items: [
          {
            name: 'Charts',
            layout: '/admin',
            path: '/conversion-funnel/dashboard/charts',
            icon: (
              <Icon
                as={MdShowChart}
                width="20px"
                height="20px"
                color="inherit"
              />
            ),
            component: <ConversionChartsView />,
          },
          {
            name: 'Data',
            layout: '/admin',
            path: '/conversion-funnel/dashboard/data',
            icon: (
              <Icon
                as={MdTableChart}
                width="20px"
                height="20px"
                color="inherit"
              />
            ),
            component: <ConversionGridView />,
          },
        ],
      },
    ],
  },
  {
    name: 'Weekly Organic Order',
    layout: '/admin',
    path: '/weekly-organic-order-session/order-session-graph',
    icon: <Icon as={MdTrendingUp} width="20px" height="20px" color="inherit" />,
    component: <WeeklyOrganic />,
  },
  {
    name: 'TikTok Compaign',
    layout: '/admin',
    icon: <Icon as={MdCampaign} width="20px" height="20px" color="inherit" />,
    path: '/tiktok-compaign',
    component: <TiktokCompaign />,
  },
  {
    name: 'RDX Social Data',
    layout: '/admin',
    path: null,
    icon: <Icon as={MdShare} width="20px" height="20px" color="inherit" />,
    component: null,
    collapse: true,
    items: [
      {
        name: 'FB Data',
        layout: '/admin',
        path: '/rdx-social-data/facebook-data',
        icon: (
          <Icon as={FaFacebook} width="20px" height="20px" color="inherit" />
        ),
        component: <FBData />,
      },
      // {
      //   name: 'Instagram Stories Data',
      //   layout: '/admin',
      //   path: '/rdx-social-data/instagram-stories',
      //   icon: <Icon as={MdMovie} width="20px" height="20px" color="inherit" />,
      //   component: <InstagramStories />,
      // },
      {
        name: 'Instagram Posts & Stories Data',
        layout: '/admin',
        path: '/rdx-social-data/instagram-stories',
        icon: (
          <Icon as={FaInstagram} width="20px" height="20px" color="inherit" />
        ),
        component: <InstagramStories />,
      },
      {
        name: 'Youtube Data',
        layout: '/admin',
        path: '/rdx-social-data/youtube-data',
        icon: (
          <Icon as={FaYoutube} width="20px" height="20px" color="inherit" />
        ),
        component: <YoutubeData />,
      },
      {
        name: 'TikTok Overview & Video Data',
        layout: '/admin',
        path: '/rdx-social-data/tiktok-overview',
        icon: <Icon as={FaTiktok} width="20px" height="20px" color="inherit" />,
        component: <TiktokOverview />,
      },
      // {
      //   name: 'TikTok Video Data',
      //   layout: '/admin',
      //   path: '/rdx-social-data/tiktok-video-data',
      //   icon: (
      //     <Icon
      //       as={MdVideoLibrary}
      //       width="20px"
      //       height="20px"
      //       color="inherit"
      //     />
      //   ),
      //   component: <TiktokVideo />,
      // },
    ],
  },
  {
    name: 'NewsLetters',
    layout: '/admin',
    icon: (
      <Icon as={MdMarkEmailRead} width="20px" height="20px" color="inherit" />
    ),
    path: '/newsletters',
    component: <NewsLetters />,
  },
];

export default routes;
