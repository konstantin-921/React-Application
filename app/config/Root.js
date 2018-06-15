import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../components/App';
import store from './store';

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={App} exact />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;

