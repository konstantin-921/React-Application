import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import App from '../components/App';
import store from './store';

const history = syncHistoryWithStore(createBrowserHistory(), store);

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} exact />
      </Router>
    </Provider>
  );
};

export default Root;

