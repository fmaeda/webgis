import React from 'react';

import MainRoute from 'routes';

import Logo from 'components/Logo';
import Menu from 'components/Menu';
import {
  Container,
  MainContainer,
  MenuContainer,
  HeaderContainer,
  Divider,
  LogoContainer,
  MainRouteContainer,
} from './styled';
import FilterPanel from './FilterPanel';
import SubMenu from 'components/SubMenu';

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
            </LogoContainer>
            <span>WEBGIS / SINAFLOR</span>
            <SubMenu />
          </HeaderContainer>
          <Divider />
          <MainRouteContainer>
            <MainRoute />
          </MainRouteContainer>
        </MainContainer>
        <FilterPanel></FilterPanel>
      </Container>
    );
  }
}

export default AppLayout;
