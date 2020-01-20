import { hot } from 'react-hot-loader';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomeRoute from './HomeRoute';
import ProductsRoute from './ProductsRoute';
import MapRoute from './MapRoute';

const history = createBrowserHistory();

class MainRoute extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/home" component={HomeRoute} />
          <Route path="/products" component={ProductsRoute} />
          <Route path="/map" component={MapRoute} />
          <Route path="/" component={HomeRoute} />
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(MainRoute);
