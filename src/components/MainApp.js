import React from 'react';
import MainRouter from './router/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export default function MainApp() {
  return (
    <>
      <Router>
        <Switch>
        <MainRouter />
        </Switch>
      </Router>
    </>
  );
}