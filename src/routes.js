import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdLocalOffer,
  MdFilterAlt,
  MdTrendingUp,
  MdShare,
  MdEmail,
  MdCampaign,
} from 'react-icons/md';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import RTL from 'views/admin/rtl';

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

const routes = [
  {
    name: 'Channel Performance',
    layout: '/admin',
    path: '/channel-performance',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Product Mix',
    layout: '/admin',
    path: '/product-mix',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Coupons',
    layout: '/admin',
    icon: <Icon as={MdLocalOffer} width="20px" height="20px" color="inherit" />,
    path: '/coupons',
    component: <DataTables />,
  },
  {
    name: 'Conversion Funnel',
    layout: '/admin',
    path: '/conversion-funnel',
    icon: <Icon as={MdFilterAlt} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: 'Weekly Organic Order',
    layout: '/admin',
    path: '/weekly-organic-order-session',
    icon: <Icon as={MdTrendingUp} width="20px" height="20px" color="inherit" />,
    component: <WeeklyOrganic />,
  },
  {
    name: 'RDX Social Data',
    layout: '/admin',
    path: '/newsletter',
    icon: <Icon as={MdShare} width="20px" height="20px" color="inherit" />,
    component: null,
    collapse: true,
    items: [
      {
        name: 'FB Data',
        layout: '/admin',
        path: '/rdx-social-data/facebook-data',
        icon: <Icon as={FaFacebook} width="20px" height="20px" color="inherit" />,
        component: <FBData />,
      },
      {
        name: 'Instagram Stories Data',
        layout: '/admin',
        path: '/rdx-social-data/instagram-stories',
        icon: <Icon as={FaInstagram} width="20px" height="20px" color="inherit" />,
        component: <InstagramStories />,
      },
      {
        name: 'Instagram Posts Data',
        layout: '/admin',
        path: '/rdx-social-data/instagram-posts',
        icon: <Icon as={FaInstagram} width="20px" height="20px" color="inherit" />,
        component: <InstagramPosts />,
      },
      {
        name: 'Youtube Data',
        layout: '/admin',
        path: '/rdx-social-data/youtube-data',
        icon: <Icon as={FaYoutube} width="20px" height="20px" color="inherit" />,
        component: <YoutubeData />,
      },
      {
        name: 'TikTok Overview Data',
        layout: '/admin',
        path: '/rdx-social-data/tiktok-overview',
        icon: <Icon as={FaTiktok} width="20px" height="20px" color="inherit" />,
        component: <TiktokOverview />,
      },
      {
        name: 'TikTok Video Data',
        layout: '/admin',
        path: '/rdx-social-data/tiktok-video-data',
        icon: <Icon as={FaTiktok} width="20px" height="20px" color="inherit" />,
        component: <TiktokVideo />,
      },

    ],
  },
  {
    name: 'NewsLetters',
    layout: '/admin',
    icon: <Icon as={MdEmail} width="20px" height="20px" color="inherit" />,
    path: '/newsletters',
    component: <NewsLetters />,
  },
  {
    name: 'TikTok Compaign',
    layout: '/admin',
    icon: <Icon as={MdCampaign} width="20px" height="20px" color="inherit" />,
    path: '/tiktok-compaign',
    component: <DataTables />,
  },
];

export default routes;
