import React from 'react';
import EChart from 'components/Echart/EChart';

const COLOR_LINE = '#F5A742';
const TEXT_COLOR = '#E5E7EB';
const TEXT_MUTED = '#9CA3AF';
const GRID_LINE = 'rgba(255, 255, 255, 0.08)';

const categories = [
  '4/24/2026',
  '4/25/2026',
  '4/26/2026',
  '4/27/2026',
  '4/28/2026',
  '4/29/2026',
];

const aov = [34.05, 32.17, 35.86, 35.84, 39.74, 31.29];

const formatNumber = (value) =>
  Number(value).toLocaleString('en-US', { maximumFractionDigits: 2 });

const option = {
  backgroundColor: 'transparent',
  title: {
    text: 'AOV Line Chart',
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
    trigger: 'axis',
    axisPointer: { type: 'line' },
    backgroundColor: 'rgba(17, 24, 39, 0.95)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    textStyle: { color: TEXT_COLOR, fontFamily: 'DM Sans, sans-serif' },
    valueFormatter: (value) => formatNumber(value),
  },
  legend: {
    orient: 'horizontal',
    right: 'right',
    bottom: 0,
    icon: 'roundRect',
    itemWidth: 14,
    itemHeight: 10,
    itemGap: 14,
    textStyle: {
      color: TEXT_COLOR,
      fontSize: 12,
      fontFamily: 'DM Sans, sans-serif',
    },
    data: [{ name: 'AOV' }],
  },
  grid: {
    left: 0,
    right: 0,
    top: 60,
    bottom: 10,
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: categories,
      axisTick: { alignWithLabel: true, lineStyle: { color: TEXT_MUTED } },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.18)' } },
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
      name: 'AOV',
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
      axisLine: { show: true, lineStyle: { color: 'rgba(255,255,255,0.18)' } },
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
      name: 'AOV',
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
      data: aov,
    },
  ],
};

const AOVLineChart = () => {
  return <EChart option={option} height="100%" width="100%" />;
};

export default AOVLineChart;
