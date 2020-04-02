import React from 'react';

import { OptionContainer, SelectedMarker } from './styled';

type Props = {
  icon: React.ComponentType;
  color: string;
  active?: boolean;
  onClick?: () => void;
};

class Option extends React.Component<Props> {
  render() {
    const { icon: Icon, color, onClick, active } = this.props;
    return (
      <OptionContainer color={color} onClick={onClick} active={active}>
        <Icon />
        <SelectedMarker active={active} color={color} />
      </OptionContainer>
    );
  }
}

export default Option;
