import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Layout from './components/Layout';
import Zen from './containers/Zen';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

const AppRouter = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Zen} />
      </Route>
    </Router>
  </Provider>
);

export default AppRouter;
