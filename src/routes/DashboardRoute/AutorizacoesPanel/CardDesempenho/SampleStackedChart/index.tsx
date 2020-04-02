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

type Props = {};
type State = {
  groups: { [key: string]: boolean };
};

export default class extends PureComponent<Props, State> {
  state = {
    groups: data.reduce(
      (acc, val) => ({
        ...acc,
        [val.name]: true,
      }),
      {},
    ),
  };

  handleClick = (filter: string) => () => {
    this.setState(({ groups }) => ({
      groups: {
        ...groups,
        [filter]: !groups[filter],
      },
    }));
  };

  render() {
    const { groups } = this.state;

    return (
      <Container>
        <BarChart
          width={400}
          height={140}
          data={data.filter(r => groups[r.name])}
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
          {Object.keys(groups)
            .reverse()
            .map(group => (
              <Item
                key={group}
                onClick={this.handleClick(group)}
                label={group}
                selected={groups[group]}
              />
            ))}
        </ItemsContainer>
      </Container>
    );
  }
}
