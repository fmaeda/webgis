import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

import { Container, Labels, Item } from './styled';

const data = [
  { name: 'Floresta', value: 300 },
  { name: 'Mata Atlântica', value: 400 },
  { name: 'Cerrado', value: 250 },
  { name: 'Pampa', value: 290 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (
      <Container>
        <PieChart width={140} height={140}>
          <Pie
            data={data}
            labelLine={false}
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
          <Item color={COLORS[0]}>Mata Atlântica</Item>
          <Item color={COLORS[1]}>Floresta</Item>
          <Item color={COLORS[2]}>Cerrado</Item>
          <Item color={COLORS[3]}>Pampa</Item>
        </Labels>
      </Container>
    );
  }
}
