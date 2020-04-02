import React from 'react';

import { Container } from './styled';
import Card from 'components/Card';
// import CardBiomas from './CardBiomas';
// import CardDesempenho from './CardDesempenho';
type Props = {};

class ArvoresPanel extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Card title="Gráfico Árvores 1" flex={3} />
        <Card title="Gráfico Árevores 2" flex={1} />
      </Container>
    );
  }
}

export default ArvoresPanel;
