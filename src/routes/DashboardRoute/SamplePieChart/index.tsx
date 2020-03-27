import React, { PureComponent } from 'react';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ContentRenderer,
  PieLabelRenderProps,
} from 'recharts';
import { GoPrimitiveSquare } from 'react-icons/go';

import { Container, Labels, Item } from './styled';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }: PieLabelRenderProps) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx! ? 'start' : 'end'}
//       dominantBaseline="central"
//     >
//       {`${(percent! * 100).toFixed(0)}%`}
//     </text>
//   );
// };

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (
      <Container>
        <PieChart width={140} height={140}>
          <Pie
            data={data}
            // cx={100}
            // cy={100}
            labelLine={false}
            // label={renderCustomizedLabel}
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <Labels>
          <Item color={COLORS[0]}>
            <GoPrimitiveSquare /> Mata Atlâtica
          </Item>
          <Item color={COLORS[1]}>
            <GoPrimitiveSquare /> Floresta
          </Item>
          <Item color={COLORS[2]}>
            <GoPrimitiveSquare /> Cerrado
          </Item>
          <Item color={COLORS[3]}>
            <GoPrimitiveSquare /> Pampa
          </Item>
        </Labels>
      </Container>
    );
  }
}
