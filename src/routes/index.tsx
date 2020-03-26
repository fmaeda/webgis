import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MapRoute from './MapRoute';
import DashboardRoute from './DashboardRoute';
import AboutRoute from './AboutRoute';

type Props = {};

export default class extends React.Component<Props> {
  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={DashboardRoute} />
        <Route path="/map" component={MapRoute} />
        <Route path="/about" component={AboutRoute} />
        <Route path="/" exact>
          <Redirect to="/map" />
        </Route>
      </Switch>
    );
  }
}
