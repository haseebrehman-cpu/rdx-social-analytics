import { useColorModeValue } from '@chakra-ui/react';
import EChart from 'components/Echart/EChart';

const categories = [
  '4/24/2026',
  '5/01/2026',
  '5/08/2026',
  '5/15/2026',
  '5/22/2026',
  '5/29/2026',
];

const regions = ['USA', 'UK', 'CA', 'DE', 'IT', 'FR'];

const regionData = {
  USA: [1200, 1500, 1300, 1800, 1700, 1600],
  UK: [900, 1100, 1000, 1200, 1150, 1080],
  CA: [700, 800, 750, 900, 850, 820],
  DE: [1100, 1200, 1150, 1300, 1250, 1220],
  IT: [600, 650, 620, 700, 680, 660],
  FR: [800, 850, 820, 950, 900, 880],
};

const REGION_COLORS = [
  '#4F8FE8',
  '#F5A742',
  '#34D399',
  '#A78BFA',
  '#F472B6',
  '#22D3EE',
];

const formatNumber = (value) =>
  Number(value).toLocaleString('en-US', { maximumFractionDigits: 2 });

const OrderSessionGraph = () => {
  const TEXT_COLOR = useColorModeValue('#1A202C', '#E5E7EB');
  const TEXT_MUTED = useColorModeValue('#718096', '#9CA3AF');
  const GRID_LINE = useColorModeValue(
    'rgba(0, 0, 0, 0.08)',
    'rgba(255, 255, 255, 0.08)',
  );
  const AXIS_LINE = useColorModeValue(
    'rgba(0, 0, 0, 0.18)',
    'rgba(255, 255, 255, 0.18)',
  );
  const TOOLTIP_BG = useColorModeValue(
    'rgba(255, 255, 255, 0.95)',
    'rgba(17, 24, 39, 0.95)',
  );
  const TOOLTIP_BORDER = useColorModeValue(
    'rgba(0, 0, 0, 0.08)',
    'rgba(255, 255, 255, 0.08)',
  );

  const option = {
    backgroundColor: 'transparent',
    title: {
      text: 'Weekly Order Sessions By Region',
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
      formatter: (params) => {
        const items = params.filter(
          (item) => item.seriesName !== 'Weekly Difference',
        );
        if (!items.length) return '';
        const header = `<div style="font-weight:600;margin-bottom:4px;">${items[0].axisValue}</div>`;
        const rows = items
          .map(
            (item) =>
              `<div style="display:flex;align-items:center;gap:6px;">${item.marker}<span>${item.seriesName}</span><span style="margin-left:auto;font-weight:600;">${formatNumber(item.value)}</span></div>`,
          )
          .join('');
        return header + rows;
      },
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
      data: [...regions.map((region) => ({ name: region }))],
    },
    grid: {
      left: 0,
      right: 0,
      top: 70,
      bottom: 0,
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
        name: 'Order Sessions',
        position: 'left',
        min: 0,
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
        name: 'Average Order Value',
        position: 'right',
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
        splitLine: { show: false },
      },
    ],
    series: [
      ...regions.map((region, idx) => ({
        name: region,
        type: 'bar',
        stack: 'regions',
        yAxisIndex: 0,
        barWidth: '45%',
        itemStyle: {
          color: REGION_COLORS[idx % REGION_COLORS.length],
          borderRadius:
            idx === regions.length - 1 ? [4, 4, 0, 0] : [0, 0, 0, 0],
        },
        emphasis: { focus: 'series' },
        data: regionData[region],
      })),
      // {
      //   name: 'Weekly Difference',
      //   type: 'line',
      //   yAxisIndex: 1,
      //   smooth: false,
      //   connectNulls: false,
      //   symbol: 'circle',
      //   symbolSize: 7,
      //   lineStyle: { width: 2.5, color: COLOR_LINE },
      //   itemStyle: { color: COLOR_LINE, borderColor: COLOR_LINE },
      //   label: {
      //     show: true,
      //     position: 'top',
      //     color: TEXT_COLOR,
      //     fontFamily: 'DM Sans, sans-serif',
      //     fontSize: 11,
      //     fontWeight: 600,
      //     formatter: (params) =>
      //       params.value == null ? '' : formatNumber(params.value),
      //   },
      //   data: weeklyDifference,
      // },
    ],
  };

  return <EChart option={option} height="100%" width="100%" />;
};

export default OrderSessionGraph;
