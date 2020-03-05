import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import PersonIcon from '@material-ui/icons/Person';
import FeedIcon from '@material-ui/icons/Notifications';

import Profile from '../containers/Profile';
import Feed from '../containers/Feed';

import { ListLink } from '../components/Link';

import * as routes from '../routes';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const MainPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
              Meus gastos
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListLink to={routes.PROFILE} primary="Perfil" icon={<PersonIcon color="primary"/>} />
          <ListLink to={routes.FEED} primary="Feed" icon={<FeedIcon color="primary"/>} />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path={routes.PROFILE} component={Profile} />
          <Route exact path={routes.FEED} component={Feed} />
          <Route path="/">
            <Redirect to={routes.PROFILE} />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default MainPage;