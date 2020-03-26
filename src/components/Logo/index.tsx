import React from 'react';
import styled from 'styles';
import logoImg from 'resources/img/logo_ibama.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
`;

const Image = styled.img`
  width: 48px;
`;

type Props = {};

class Logo extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Image src={logoImg} />
      </Container>
    );
  }
}

export default Logo;
