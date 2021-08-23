import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import HowToUse from './components/pages/HowToUse';
import WhatWeDo from './components/pages/WhatWeDo';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signUp' exact component={SignUp}/>
        <Route path='/how-to-use' exact component={HowToUse}/>
        <Route path='/what-we-do' component={WhatWeDo}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
