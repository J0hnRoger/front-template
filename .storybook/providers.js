// stories/Provider.js
import * as React from 'react';

// Store Redux
import { Provider as ReduxProvider } from 'react-redux';
import { browserHistory } from 'react-router';
import { configureStore } from '@store/configureStore';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const store = configureStore(history, {});

const Provider = ({ story }) => {
  return (
    <ReduxProvider store={store}>
        {story}
    </ReduxProvider>
  );
};

export default Provider
