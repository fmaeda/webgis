import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Container, ItemsContainer } from './styled';
import Item from './Item';

const data = [
  {
    name: '50%',
    2018: 15,
    2019: 5,
  },
  {
    name: '75%',
    2018: 18,
    2019: 15,
  },
  {
    name: '90%',
    2018: 21,
    2019: 19,
  },
  {
    name: '95%',
    2018: 21.7,
    2019: 21,
  },
  {
    name: '100%',
    2018: 105,
    2019: 85,
  },
];

export default class extends PureComponent {
  handleClick = (filter: string) => () => {
    console.log('filter');
  };

  render() {
    return (
      <Container>
        <BarChart
          width={400}
          height={140}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="whitesmoke" />
          <YAxis stroke="whitesmoke" />
          <Tooltip />
          <Legend />
          <Bar dataKey="2018" fill="#8884d8" />
          <Bar dataKey="2019" fill="#82ca9d" />
        </BarChart>
        <ItemsContainer>
          <Item onClick={this.handleClick('50%')} label="50%" />
          <Item onClick={this.handleClick('75%')} label="75%" />
          <Item onClick={this.handleClick('90%')} label="90%" />
          <Item onClick={this.handleClick('95%')} label="95%" />
          <Item onClick={this.handleClick('100%')} label="100%" />
        </ItemsContainer>
      </Container>
    );
  }
}
