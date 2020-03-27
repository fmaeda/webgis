import React from 'react';

import { OptionContainer } from './styled';

type Props = {
  icon: React.ComponentType;
  color: string;
  onClick: () => void;
};

class Option extends React.Component<Props> {
  render() {
    const { icon: Icon, color, onClick } = this.props;

    return (
      <OptionContainer color={color} onClick={onClick}>
        <Icon />
      </OptionContainer>
    );
  }
}

export default Option;
