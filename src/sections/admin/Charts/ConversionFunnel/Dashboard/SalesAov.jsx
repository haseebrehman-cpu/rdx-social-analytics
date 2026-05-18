import React from 'react';
import EChart from 'components/Echart/EChart';

const COLOR_BAR = '#4F8FE8';
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

const totalSales = [6907, 6166, 6857, 9030, 8554, 7757];
const sumOfAov = [50.05, 48.17, 39.86, 45.84, 49.74, 41.29];

const formatNumber = (value) =>
  Number(value).toLocaleString('en-US', { maximumFractionDigits: 2 });

const option = {
  backgroundColor: 'transparent',
  title: {
    text: 'Sales - AOV',
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
    axisPointer: { type: 'shadow' },
    backgroundColor: 'rgba(17, 24, 39, 0.95)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    textStyle: { color: TEXT_COLOR, fontFamily: 'DM Sans, sans-serif' },
    valueFormatter: (value) => formatNumber(value),
  },
  legend: {
    orient: 'horizontal',
    right: 12,
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
    data: [
      { name: 'Total sales' },
      { name: 'Sum of AOV' },
    ],
  },
  grid: {
    left: 0,
    right: 0,
    top: 10,
    bottom: 10,
    containLabel: false,
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
      name: 'Total sales',
      position: 'left',
      min: 0,
      max: 10000,
      interval: 1000,
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
        formatter: (v) => formatNumber(v),
      },
      splitLine: { lineStyle: { color: GRID_LINE } },
    },
    {
      type: 'value',
      name: 'Sum of AOV',
      position: 'right',
      min: 0,
      max: 60,
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
      splitLine: { show: false },
    },
  ],
  series: [
    {
      name: 'Total sales',
      type: 'bar',
      yAxisIndex: 0,
      barWidth: '38%',
      itemStyle: {
        color: COLOR_BAR,
        borderRadius: [4, 4, 0, 0],
      },
      emphasis: {
        itemStyle: { color: '#3A7BD5' },
      },
      label: {
        show: true,
        position: 'inside',
        rotate: 90,
        color: '#FFFFFF',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 11,
        fontWeight: 600,
        formatter: (params) => formatNumber(params.value),
      },
      data: totalSales,
    },
    {
      name: 'Sum of AOV',
      type: 'line',
      yAxisIndex: 1,
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
      data: sumOfAov,
    },
  ],
};

const SalesAov = () => {
  return <EChart option={option} height="100%" width="100%" />;
};

export default SalesAov;
