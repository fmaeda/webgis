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
  FilterPanel,
  LogoContainer,
  CenterFilterPanel,
} from './styled';

class AppLayout extends React.Component {
  render() {
    return (
      <Container>
        <MainContainer>
          <MenuContainer>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            {/* <Menu /> */}
          </MenuContainer>
          <RouteContainer>
            <MainRoute />
          </RouteContainer>
          <FilterContainer>
            <FilterPanel position="left">Algum gráfico...</FilterPanel>
            {/* <CenterFilterPanel>Center</CenterFilterPanel> */}
            <FilterPanel position="right">Filtros...</FilterPanel>
          </FilterContainer>
        </MainContainer>
      </Container>
    );
  }
}

export default AppLayout;
