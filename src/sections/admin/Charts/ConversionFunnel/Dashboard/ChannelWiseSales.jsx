import React from 'react';
import EChart from 'components/Echart/EChart';

const TEXT_COLOR = '#E5E7EB';
const TEXT_MUTED = '#9CA3AF';
const LABEL_BG = 'rgba(55, 65, 81, 0.95)';
const LABEL_BORDER = 'rgba(255, 255, 255, 0.18)';

const CHANNEL_COLORS = {
  Paid: '#3A6FB5',
  Email: '#5A8FD8',
  Affiliate: '#3A6FB5',
  'Non-Attributed': '#5A8FD8',
  Organic: '#3A6FB5',
};

const channelData = [
  { name: 'Paid', value: 27610 },
  { name: 'Email', value: 12171 },
  { name: 'Affiliate', value: 1849 },
  { name: 'Non-Attributed', value: 1849 },
  { name: 'Organic', value: 3044 },
];

const formatNumber = (value) =>
  Number(value).toLocaleString('en-US', { maximumFractionDigits: 0 });

const totalValue = channelData.reduce((sum, item) => sum + item.value, 0);

const option = {
  backgroundColor: 'transparent',
  title: {
    text: 'Channel wise sales',
    left: 'center',
    top: 6,
    textStyle: {
      color: TEXT_COLOR,
      fontSize: 16,
      fontWeight: 600,
      fontFamily: 'DM Sans, sans-serif',
    },
  },
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(17, 24, 39, 0.95)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    textStyle: { color: TEXT_COLOR, fontFamily: 'DM Sans, sans-serif' },
    formatter: (params) =>
      `${params.name}<br/>${formatNumber(params.value)} (${params.percent}%)`,
  },
  legend: {
    orient: 'horizontal',
    right: 0,
    bottom: 0,
    icon: 'roundRect',
    itemWidth: 14,
    itemHeight: 10,
    itemGap: 10,
    textStyle: {
      color: TEXT_COLOR,
      fontSize: 12,
      fontFamily: 'DM Sans, sans-serif',
    },
    formatter: (name) => name,
    data: channelData.map((item) => ({ name: item.name })),
  },
  series: [
    {
      name: 'Channel',
      type: 'pie',
      radius: ['45%', '72%'],
      center: ['50%', '52%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderColor: 'rgba(17, 24, 39, 0.6)',
        borderWidth: 2,
      },
      label: {
        show: true,
        position: 'outside',
        color: TEXT_COLOR,
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 11,
        fontWeight: 600,
        backgroundColor: LABEL_BG,
        borderColor: LABEL_BORDER,
        borderWidth: 1,
        borderRadius: 3,
        padding: [3, 6],
        formatter: (params) => {
          const percent = ((params.value / totalValue) * 100).toFixed(0);
          return `${formatNumber(params.value)} , ${percent}%`;
        },
      },
      labelLine: {
        show: true,
        length: 10,
        length2: 10,
        lineStyle: {
          color: TEXT_MUTED,
        },
      },
      emphasis: {
        scale: true,
        scaleSize: 4,
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.4)',
        },
      },
      data: channelData.map((item) => ({
        ...item,
        itemStyle: { color: CHANNEL_COLORS[item.name] },
      })),
    },
  ],
};

const ChannelWiseSales = () => {
  return <EChart option={option} height="100%" width="100%" />;
};

export default ChannelWiseSales;
