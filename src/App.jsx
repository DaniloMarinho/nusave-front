import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';

import * as routes from './routes';

import MainPage from './pages/MainPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.PROFILE} component={MainPage} />
      <Route path={routes.FEED} component={MainPage} />
      <Route path="/">
        <Redirect to={routes.PROFILE} />
      </Route>
    </Switch>
  </BrowserRouter>
);
export default App;
