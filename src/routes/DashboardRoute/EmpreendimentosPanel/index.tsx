import React from 'react';

import { Container } from './styled';
import Card from 'components/Card';
// import CardBiomas from './CardBiomas';
// import CardDesempenho from './CardDesempenho';
type Props = {};

class EmpreendimentosPanel extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Card title="Gráfico Empreendimentos 1" />
        <Card title="Gráfico Empreendimentos 2" />
        <Card title="Gráfico Empreendimentos 3" />
      </Container>
    );
  }
}

export default EmpreendimentosPanel;
