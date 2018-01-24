import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createBrowserHistory } from 'history';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import * as RoutesModule from './routes';
import configureStore from './store/configureStore';
let routes = RoutesModule.routes;

// Create browser history to use in the Redux store
const history = createBrowserHistory();

const store = configureStore(history);

function renderApp() {
  // This code starts up the React app when it runs in a browser. It sets up the routing configuration
  // and injects the app into a DOM element.
  ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {routes}
            </ConnectedRouter>
        </Provider>
      </AppContainer>,
      document.getElementById('root'),
  );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept('./routes', () => {
      routes = require<typeof RoutesModule>('./routes').routes;
      renderApp();
  });
}

registerServiceWorker();
