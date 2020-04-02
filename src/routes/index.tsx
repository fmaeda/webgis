import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MapRoute from './MapRoute';
import DashboardRoute from './DashboardRoute';
import AboutRoute from './AboutRoute';
import { menuPaths, MenuItem } from 'model/enums';

type Props = {};

export default class extends React.Component<Props> {
  render() {
    return (
      <Switch>
        <Route path={menuPaths[MenuItem.MAP]} component={MapRoute} />
        <Route
          path={menuPaths[MenuItem.DASHBOARD]}
          component={DashboardRoute}
        />
        <Route path={menuPaths[MenuItem.ABOUT]} component={AboutRoute} />
        <Route path="/" exact>
          <Redirect to="/map" />
        </Route>
      </Switch>
    );
  }
}
