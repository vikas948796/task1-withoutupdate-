import React from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './home';
import Update from './update';


const App = () =>{
  return ( 
  
  
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/update" component={Update} />
      </Switch>  
    </Router>
 
  )
};

export default App;
