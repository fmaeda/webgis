import React from 'react';

import { Container, Head } from './styled';
import Card from 'components/Card';

type Props = {};

class DashboardRoute extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Head>
          <Card>Card 1</Card>
          <Card>Card 2</Card>
          <Card>Card 3</Card>
        </Head>
      </Container>
    );
  }
}

export default DashboardRoute;
