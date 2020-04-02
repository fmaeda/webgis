import React from 'react';

import { Container } from './styled';
import CardBiomas from './CardBiomas';
import CardDesempenho from './CardDesempenho';
type Props = {};

class AutorizacoesPanel extends React.Component<Props> {
  render() {
    return (
      <Container>
        <CardBiomas />
        <CardDesempenho />
      </Container>
    );
  }
}

export default AutorizacoesPanel;
