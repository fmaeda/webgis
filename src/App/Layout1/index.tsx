import React from 'react';

import MainRoute from 'routes';

import Logo from 'components/Logo';
import Menu from 'components/Menu';
import {
  Container,
  MainContainer,
  MenuContainer,
  RouteContainer,
  FilterContainer,
} from './styled';

class AppLayout extends React.Component {
  render() {
    return (
      <Container>
        <MainContainer>
          <MenuContainer>
            <Logo />
            <Menu />
          </MenuContainer>
          <RouteContainer>
            <MainRoute />
          </RouteContainer>
          <FilterContainer>filters...</FilterContainer>
        </MainContainer>
      </Container>
    );
  }
}

export default AppLayout;
