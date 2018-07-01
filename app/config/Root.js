import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import MainPage from '../components/privatPage/MainPage';
import FormLogin from '../components/openPage/FormLogin';
import store from './store';
import App from '../components/App';
import FormRegistration from '../components/openPage/FormRegistration';

const history = createBrowserHistory();

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route path="/registration" component={FormRegistration} />
            <Route path="/login" component={FormLogin} />
            <Route path="/mainpage" component={MainPage} />
            <Route path="/" component={App} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

export default Root;

