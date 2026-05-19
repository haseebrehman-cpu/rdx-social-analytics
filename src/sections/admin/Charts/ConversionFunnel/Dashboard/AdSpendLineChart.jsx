import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import EChart from 'components/Echart/EChart';

const categories = [
  '4/24/2026',
  '4/25/2026',
  '4/26/2026',
  '4/27/2026',
  '4/28/2026',
  '4/29/2026',
];

const adSpend = [4.05, 14.17, 34.86, 44.84, 49.74, 41.29];

const formatNumber = (value) =>
  Number(value).toLocaleString('en-US', { maximumFractionDigits: 2 });

const AdSpendLineChart = () => {
  const COLOR_LINE = '#F5A742';
  const TEXT_COLOR = useColorModeValue('#1A202C', '#E5E7EB');
  const TEXT_MUTED = useColorModeValue('#718096', '#9CA3AF');
  const GRID_LINE = useColorModeValue('rgba(0, 0, 0, 0.08)', 'rgba(255, 255, 255, 0.08)');
  const AXIS_LINE = useColorModeValue('rgba(0, 0, 0, 0.18)', 'rgba(255, 255, 255, 0.18)');
  const TOOLTIP_BG = useColorModeValue('rgba(255, 255, 255, 0.95)', 'rgba(17, 24, 39, 0.95)');
  const TOOLTIP_BORDER = useColorModeValue('rgba(0, 0, 0, 0.08)', 'rgba(255, 255, 255, 0.08)');

  const option = {
  backgroundColor: 'transparent',
  title: {
    text: 'AdSpend Line Chart',
    left: 0,
    top: 0,
    textStyle: {
      color: TEXT_COLOR,
      fontSize: 16,
      fontWeight: 600,
      fontFamily: 'DM Sans, sans-serif',
    },
  },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'line' },
      backgroundColor: TOOLTIP_BG,
      borderColor: TOOLTIP_BORDER,
      textStyle: { color: TEXT_COLOR, fontFamily: 'DM Sans, sans-serif' },
      valueFormatter: (value) => formatNumber(value),
    },
  legend: {
    orient: 'horizontal',
    right: 'center',
    top: 0,
    icon: 'roundRect',
    itemWidth: 14,
    itemHeight: 10,
    itemGap: 14,
    textStyle: {
      color: TEXT_COLOR,
      fontSize: 12,
      fontFamily: 'DM Sans, sans-serif',
    },
    data: [{ name: 'AdSpend' }],
  },
  grid: {
    left: 0,
    right: 0,
    top: 70,
    bottom: 0,
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: categories,
      axisTick: { alignWithLabel: true, lineStyle: { color: TEXT_MUTED } },
      axisLine: { lineStyle: { color: AXIS_LINE } },
      axisLabel: {
        color: TEXT_MUTED,
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 11,
        rotate: 35,
        margin: 12,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: 'AdSpend',
      position: 'left',
      min: 0,
      max: 100,
      interval: 10,
      nameTextStyle: {
        color: TEXT_MUTED,
        fontSize: 11,
        padding: [0, 0, 8, 0],
        fontFamily: 'DM Sans, sans-serif',
      },
      axisLine: { show: true, lineStyle: { color: AXIS_LINE } },
      axisTick: { show: false },
      axisLabel: {
        color: TEXT_MUTED,
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 11,
        formatter: (v) => v.toFixed(2),
      },
      splitLine: { lineStyle: { color: GRID_LINE } },
    },
  ],
  series: [
    {
      name: 'AdSpend',
      type: 'line',
      yAxisIndex: 0,
      smooth: false,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: { width: 2.5, color: COLOR_LINE },
      itemStyle: { color: COLOR_LINE, borderColor: COLOR_LINE },
      label: {
        show: true,
        position: 'top',
        color: TEXT_COLOR,
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 11,
        fontWeight: 600,
        formatter: (params) => params.value.toFixed(2),
      },
      data: adSpend,
    },
  ],
  };

  return <EChart option={option} height="100%" width="100%" />;
};

export default AdSpendLineChart;
