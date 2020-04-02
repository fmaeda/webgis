import {
  FaChartArea,
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaTable,
} from 'react-icons/fa';

export enum ChartType {
  PIE_CHART = 'PIE_CHART',
  BAR_CHART = 'BAR_CHART',
  AREA_CHART = 'AREA_CHART',
  LINE_CHART = 'LINE_CHART',
  NUMERIC_CHART = 'NUMERIC_CHART',
}

export const chartIcons: { [key in ChartType]: React.ComponentType } = {
  [ChartType.PIE_CHART]: FaChartPie,
  [ChartType.BAR_CHART]: FaChartBar,
  [ChartType.AREA_CHART]: FaChartArea,
  [ChartType.LINE_CHART]: FaChartLine,
  [ChartType.NUMERIC_CHART]: FaTable,
};

export const chartColors: { [key in ChartType]: string } = {
  [ChartType.PIE_CHART]: '#23A28E',
  [ChartType.BAR_CHART]: '#1F79CF',
  [ChartType.AREA_CHART]: '#CA734B',
  [ChartType.LINE_CHART]: '#CA9D3B',
  [ChartType.NUMERIC_CHART]: '#B10DC9',
};
