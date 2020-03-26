import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import { PersistGate } from 'redux-persist/integration/react';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import configureStore from 'store/configureStore';
import { theme } from 'styles';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

const { store, persistor } = configureStore();
const history = createBrowserHistory();

const render = (AppComponent: React.ComponentType) => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer>
            <Router history={history}>
              <AppComponent />
            </Router>
          </AppContainer>
        </PersistGate>
      </ThemeProvider>
    </Provider>,
    document.getElementById('root') as HTMLElement,
  );
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
