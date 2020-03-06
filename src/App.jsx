import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  

import * as routes from './routes';

import MainPage from './pages/MainPage';

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#fff',
        main: '#81259D',
        dark: '#000'
     },
     secondary: {
       main: '#f9a602',
     },
  },
  typography: {
    "fontFamily": "\"Gotham SSm A\", \"Gotham SSm B\", \"Helvetica Neue\", sans-serif",
  },
});


const App = () => (
  <MuiThemeProvider theme = { theme }>
    <BrowserRouter>
      <Switch>
        <Route path={routes.PROFILE} component={MainPage} />
        <Route path={routes.FEED} component={MainPage} />
        <Route path="/">
          <Redirect to={routes.PROFILE} />
        </Route>
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);
export default App;