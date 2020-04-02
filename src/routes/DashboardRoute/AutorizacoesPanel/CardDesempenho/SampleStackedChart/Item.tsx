import React from 'react';

import { FaRegCheckSquare, FaRegSquare } from 'react-icons/fa';

import { ItemContainer } from './styled';

type Props = {
  onClick: () => void;
  label: string;
  selected: boolean;
};

class Item extends React.Component<Props> {
  render() {
    const { onClick, label, selected } = this.props;

    return (
      <ItemContainer onClick={onClick} selected={selected}>
        {selected ? <FaRegCheckSquare /> : <FaRegSquare />} <span>{label}</span>
      </ItemContainer>
    );
  }
}

export default Item;
