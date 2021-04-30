import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Account from './pages/Account';
import Report from './pages/Report';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/history" exact component={History} />
        <Route path="/account" exact component={Account} />
        <Route path="/report" exact component={Report} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
