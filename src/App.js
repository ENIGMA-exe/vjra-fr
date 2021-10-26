import React from 'react'
import './App.css';

import HomePage from './Pages/home_page/HomePage';
import Login from './Pages/login_page/login';
import Profile from './Pages/profile/profile';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';



function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/home' component={HomePage}/>
      <Route exact path='/profile' component={Profile}/>
    </Switch>
    </Router>
  );
}

export default App;
