import React from 'react';

import { Container } from './styled';
import { RouteComponentProps } from 'react-router';

type Props = {} & RouteComponentProps;

export default ({ history }: Props) => (
  <Container>
    <button onClick={() => history.push('/products')}>Products</button>
    <button onClick={() => history.push('/map')}>Mapa</button>
  </Container>
);
