import { hot } from 'react-hot-loader';
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import MapRoute from './MapRoute';
import DashboardRoute from './DashboardRoute';
import AboutRoute from './AboutRoute';

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

const history = createBrowserHistory();

class MainRoute extends React.Component {
  render() {
    return (
      <Container>
        <Router history={history}>
          <MainContainer>
            <MenuContainer>
              <LogoContainer>
                <Logo />
              </LogoContainer>
              {/* <Menu /> */}
            </MenuContainer>
            <RouteContainer>
              <Switch>
                <Route path="/dashboard" component={DashboardRoute} />
                <Route path="/map" component={MapRoute} />
                <Route path="/about" component={AboutRoute} />
                <Route path="/" exact>
                  <Redirect to="/map" />
                </Route>
              </Switch>
            </RouteContainer>
            <FilterContainer>
              <FilterPanel position="left">Algum gráfico...</FilterPanel>
              {/* <CenterFilterPanel>Center</CenterFilterPanel> */}
              <FilterPanel position="right">Filtros...</FilterPanel>
            </FilterContainer>
          </MainContainer>
        </Router>
      </Container>
    );
  }
}

export default hot(module)(MainRoute);
