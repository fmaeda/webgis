import React from 'react';

import MainRoute from 'routes';

import Logo from 'components/Logo';
import Menu from './Menu';
import {
  Container,
  MainContainer,
  MenuContainer,
  HeaderContainer,
  Divider,
  LogoContainer,
} from './styled';
import FilterPanel from './FilterPanel';

class AppLayout extends React.Component {
  render() {
    return (
      <Container>
        <MenuContainer>
          <Menu />
        </MenuContainer>
        <MainContainer>
          <HeaderContainer>
            <LogoContainer>
              <Logo />
              <span>WEBGIS / SINAFLOR</span>
            </LogoContainer>
            <Divider />
          </HeaderContainer>
          <MainRoute />
        </MainContainer>
        <FilterPanel></FilterPanel>
      </Container>
    );
  }
}

export default AppLayout;
