import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  // Tooltip,
} from 'recharts';

import { Container, Head, Content } from './styled';
import Card from 'components/Card';
import data from './data';

import SamplePieChart from './SamplePieChart';

type Props = {};

class DashboardRoute extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Head>
          <Card>
            <SamplePieChart />
          </Card>
          <Card>Card 2</Card>
          <Card>Card 3</Card>
        </Head>
        <Content>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              margin={{ top: 30, right: 40, left: 20, bottom: 20 }}
              data={data}
            >
              <defs>
                <linearGradient id="color2018" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.7} />
                  <stop offset="90%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="color2019" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.7} />
                  <stop offset="90%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="color2020" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffc658" stopOpacity={0.7} />
                  <stop offset="90%" stopColor="#ffc658" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="label"
                interval="preserveStartEnd"
                height={70}
                // tick={tickProps => <TimeAxisTick {...tickProps} />}
              />
              <YAxis
                interval="preserveStartEnd"
                // tick={tickProps => <SimpleAxisTick {...tickProps} />}
              />
              {/* <Tooltip
                content={
                  <DynamicComparisonTooltip
                    baseValueProperty="2017"
                    legendColors={legendColors}
                    legendLabels={legendLabels}
                  />
                }
              /> */}
              <CartesianGrid strokeDasharray="3 3" />

              <Area
                key="2018"
                type="monotone"
                dataKey="value_2018"
                stroke="gray"
                fillOpacity={1}
                fill="url(#color2018)"
              />
              <Area
                key="2019"
                type="monotone"
                dataKey="value_2019"
                stroke="gray"
                fillOpacity={1}
                fill="url(#color2019)"
              />
              <Area
                key="2020"
                type="monotone"
                dataKey="value_2020"
                stroke="gray"
                fillOpacity={1}
                fill="url(#color2020)"
              />

              {/* {Objects.entries(legendColors).map(([key, color]) => (
                <Area
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={color}
                  fillOpacity={1}
                  fill={`url(#colorRef_${key})`}
                />
              ))} */}
            </AreaChart>
          </ResponsiveContainer>
        </Content>
      </Container>
    );
  }
}

export default DashboardRoute;
