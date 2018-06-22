import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import MainPage from '../components/privatPage/MainPage';
import store from './store';
import App from '../components/App';

const history = syncHistoryWithStore(createBrowserHistory(), store);

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/mainpage" component={MainPage} />
            <Route path="/" component={App} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default Root;

