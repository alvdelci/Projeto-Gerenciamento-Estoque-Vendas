import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppLogin from './AppLogin';
import AppHome from './AppHome';
import AppRemove from './AppRemove';
import Vendas from './components/vendas/vendas.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={AppLogin} />
          <Route path="/home" component={AppHome} />
          <Route path="/remove" component={AppRemove} />
          <Route path="/vendas" component={Vendas} />
        </Switch>
      </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
