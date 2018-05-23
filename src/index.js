import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './container/index';
import Login from './container/login/login'
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/article" component={Index}></Route>
      <Route path="/login" component={Login}></Route>
      <Redirect to="/article"/>
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
);
registerServiceWorker();
