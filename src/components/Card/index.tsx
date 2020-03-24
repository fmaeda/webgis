import React from 'react';

import { Container } from './styled';

type Props = {
  children?: React.ReactNode;
};

class Card extends React.Component<Props> {
  render() {
    const { children } = this.props;

    return <Container>{children}</Container>;
  }
}

export default Card;
