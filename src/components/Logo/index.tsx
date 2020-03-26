import React from 'react';
import styled from 'styles';
import logoImg from 'resources/img/logo_ibama.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
`;

const Image = styled.img<{ size?: number }>`
  width: ${({ size = 48 }) => `${size}px`};
`;

type Props = {
  size?: number;
};

class Logo extends React.Component<Props> {
  render() {
    const { size } = this.props;

    return (
      <Container>
        <Image size={size} src={logoImg} />
      </Container>
    );
  }
}

export default Logo;
