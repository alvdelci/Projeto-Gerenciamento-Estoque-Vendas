import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppLogin from './AppLogin';
import AppHome from './AppHome';
import AppRemove from './AppRemove';
import AppAdd from './AppAdd';
import AppVendas from './AppVendas';
import AppView from './AppView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={AppLogin} />
          <Route path="/home" component={AppHome} />
          <Route path="/add" component={AppAdd} />
          <Route path="/remove" component={AppRemove} />
          <Route path="/view" component={AppView} />
          <Route path="/vendas" component={AppVendas} />
        </Switch>
      </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
