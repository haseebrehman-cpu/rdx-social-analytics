import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import EChart from 'components/Echart/EChart';

const REGION_COLORS = {
  USA: '#3A6FB5',
  UK: '#5A8FD8',
  EU: '#7FAEEA',
  CA: '#A6C8F0',
  AE: '#CBDFF5',
};

const regionData = [
  { name: 'USA', value: 27610 },
  { name: 'UK', value: 12171 },
  { name: 'EU', value: 1849 },
  { name: 'CA', value: 3044 },
  { name: 'AE', value: 398 },
];

const formatNumber = (value) =>
  Number(value).toLocaleString('en-US', { maximumFractionDigits: 0 });

const totalValue = regionData.reduce((sum, item) => sum + item.value, 0);

const RegionWiseSales = () => {
  const TEXT_COLOR = useColorModeValue('#1A202C', '#E5E7EB');
  const TEXT_MUTED = useColorModeValue('#718096', '#9CA3AF');
  const TOOLTIP_BG = useColorModeValue('rgba(255, 255, 255, 0.95)', 'rgba(17, 24, 39, 0.95)');
  const TOOLTIP_BORDER = useColorModeValue('rgba(0, 0, 0, 0.08)', 'rgba(255, 255, 255, 0.08)');
  const LABEL_BG = useColorModeValue('rgba(255, 255, 255, 0.95)', 'rgba(55, 65, 81, 0.95)');
  const LABEL_BORDER = useColorModeValue('rgba(0, 0, 0, 0.18)', 'rgba(255, 255, 255, 0.18)');
  const PIE_BORDER = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(17, 24, 39, 0.6)');

  const option = {
    backgroundColor: 'transparent',
    title: {
      text: 'Region wise sales',
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
      backgroundColor: TOOLTIP_BG,
      borderColor: TOOLTIP_BORDER,
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
      data: regionData.map((item) => ({ name: item.name })),
    },
    series: [
      {
        name: 'Region',
        type: 'pie',
        radius: ['45%', '72%'],
        center: ['50%', '52%'],
        avoidLabelOverlap: true,
        itemStyle: {
          borderColor: PIE_BORDER,
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
        data: regionData.map((item) => ({
          ...item,
          itemStyle: { color: REGION_COLORS[item.name] },
        })),
      },
    ],
  };

  return <EChart option={option} height="100%" width="100%" />;
};

export default RegionWiseSales;
