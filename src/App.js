import React, { Component } from 'react';
import './App.css';

import { NavigationBar } from './NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './components/Home/Home';
import { About } from './components/About/About';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
    <Router>
      <NavigationBar />
      <Switch>
        <Route path='/' component={Home}></Route>
        <Route path='./components/About/About' component={About}></Route>
      </Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
