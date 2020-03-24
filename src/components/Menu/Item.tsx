import React from 'react';
import { ItemContainer } from './styled';

type Props = {
  icon: React.ComponentType;
  onClick: () => void;
  color: string;
  active?: boolean;
};

class Item extends React.Component<Props> {
  render() {
    const { active, icon: Icon, onClick, color } = this.props;

    return (
      <ItemContainer active={!!active} onClick={onClick} color={color}>
        <Icon />
      </ItemContainer>
    );
  }
}

export default Item;
