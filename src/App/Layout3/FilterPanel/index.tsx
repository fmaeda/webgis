import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { Container, Content, HandleContainer } from './styled';

type Props = {};

type State = {
  open: boolean;
};

class FilterPanel extends React.Component<Props, State> {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(({ open }) => ({
      open: !open,
    }));
  };

  render() {
    const { children } = this.props;
    const { open } = this.state;

    return (
      <>
        <Container open={open}>
          <Content>{children}</Content>
        </Container>
        <HandleContainer onClick={this.handleToggle} open={open}>
          {open ? <FaChevronRight /> : <FaChevronLeft />}
        </HandleContainer>
      </>
    );
  }
}

export default FilterPanel;
