import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, YAxis, CartesianGrid } from 'recharts';
import { Container, Labels, Item } from './styled';

const data = [
  { name: 'Floresta', value: 300 },
  { name: 'Mata Atlântica', value: 400 },
  { name: 'Cerrado', value: 250 },
  { name: 'Pampa', value: 290 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class SampleBarChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';

  render() {
    return (
      <Container>
        <BarChart
          width={260}
          height={120}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="name" stroke="whitesmoke" /> */}
          <YAxis stroke="whitesmoke" />
          <Bar dataKey="value" fill="#8884d8" label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
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
