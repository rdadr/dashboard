import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Overview from './Components/Pages/Overview';
import Tickets from './Components/Pages/Tickets';
import './App.css';

const App = ()=> {
  return (
    <BrowserRouter >
    <Switch>
      <Route path="/overview" exact component={Overview} />
      <Route path="/tickets" component={Tickets} />
    </Switch>
    </BrowserRouter>
  );
}
export default App;