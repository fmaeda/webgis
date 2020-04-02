import React from 'react';

import { ItemContainer } from './styled';

type Props = {
  onClick: () => void;
  label: string;
};

class Item extends React.Component<Props> {
  render() {
    const { onClick, label } = this.props;

    return (
      <ItemContainer onClick={onClick}>
        <span>{label}</span>
      </ItemContainer>
    );
  }
}

export default Item;
