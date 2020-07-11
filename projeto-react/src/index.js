import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppLogin from './AppLogin';
import AppHome from './AppHome';
import AppRemove from './AppRemove';
import AppUpdate from './AppUpdate';
import AppAdd from './AppAdd';
import AppView from './AppView';
import AppVendas from './AppVendas';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={AppLogin} />
          <Route path="/home" component={AppHome} />
          <Route path="/remove" component={AppRemove} />
          <Route path="/update" component={AppUpdate} />
          <Route path="/add" component={AppAdd} />
          <Route path="/view" component={AppView} />
          <Route path="/vendas" component={AppVendas} />
        </Switch>
      </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
