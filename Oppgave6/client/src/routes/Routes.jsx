import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';

import MainLayout from '../layouts/MainLayout';
import CreatePoll from '../pages/CreatePoll';
import Polls from '../pages/Polls';
import CreateUser from '../pages/CreateUser'
import Result from '../pages/Result';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/createuser">
          <CreateUser />
        </Route>
        <Route exact path="/">
          <Polls />
        </Route>
        <Route exact path="/createpoll">
          <CreatePoll />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
