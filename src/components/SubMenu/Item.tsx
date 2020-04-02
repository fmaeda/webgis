import React from 'react';

import { ItemContainer, SelectedMarker } from './styled';

type Props = {
  color: string;
  label: string;
  onClick: () => void;
  active?: boolean;
};

class Item extends React.Component<Props> {
  render() {
    const { color, label, active, onClick } = this.props;

    return (
      <ItemContainer color={color} active={active} onClick={onClick}>
        {label}
        <SelectedMarker color={color} active={active} />
      </ItemContainer>
    );
  }
}

export default Item;
