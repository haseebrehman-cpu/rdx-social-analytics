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

const traffic = [2500, 3000, 3500, 4000, 4500, 5000];
const cvr = [10.05, 18.17, 29.86, 35.84, 49.74, 51.29];

const formatNumber = (value) =>
  Number(value).toLocaleString('en-US', { maximumFractionDigits: 2 });

const TrafficCVR = () => {
  const COLOR_BAR = '#4F8FE8';
  const COLOR_LINE = '#F5A742';
  const TEXT_COLOR = useColorModeValue('#1A202C', '#E5E7EB');
  const TEXT_MUTED = useColorModeValue('#718096', '#9CA3AF');
  const GRID_LINE = useColorModeValue('rgba(0, 0, 0, 0.08)', 'rgba(255, 255, 255, 0.08)');
  const AXIS_LINE = useColorModeValue('rgba(0, 0, 0, 0.18)', 'rgba(255, 255, 255, 0.18)');
  const TOOLTIP_BG = useColorModeValue('rgba(255, 255, 255, 0.95)', 'rgba(17, 24, 39, 0.95)');
  const TOOLTIP_BORDER = useColorModeValue('rgba(0, 0, 0, 0.08)', 'rgba(255, 255, 255, 0.08)');
  const BAR_LABEL_COLOR = useColorModeValue('#1A202C', '#FFFFFF');

  const option = {
    backgroundColor: 'transparent',
    title: {
      text: 'Traffic - CVR',
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
      axisPointer: { type: 'shadow' },
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
      data: [
        { name: 'Traffic' },
        { name: 'CVR' },
      ],
    },
    grid: {
      left: 0,
      right: 0,
      top: 70,
      bottom: 70,
      containLabel: false,
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
        name: 'Traffic',
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
        axisLine: { show: true, lineStyle: { color: AXIS_LINE } },
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
        name: 'CVR',
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
        axisLine: { show: true, lineStyle: { color: AXIS_LINE } },
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
        name: 'Traffic',
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
          color: BAR_LABEL_COLOR,
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 11,
          fontWeight: 600,
          formatter: (params) => formatNumber(params.value),
        },
        data: traffic,
      },
      {
        name: 'CVR',
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
        data: cvr,
      },
    ],
  };

  return <EChart option={option} height="100%" width="100%" />;
};

export default TrafficCVR;
