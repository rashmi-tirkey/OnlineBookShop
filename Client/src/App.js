import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";

import About from './components/about';
import Home from './components/Home';
import NotFound from './PageNotFound/NotFound';
import Login from './components/login'

import './App.scss';

function App() {
  return(
    <div className="x">
    <Router>
      <div className="parent-wrapper"> 
        <Switch>
          <Route path ="/" exact component={Home}/> 
          <Route path ="/about" component={About}/> 
          <Route path ="/login" component={Login}/>
          <Route component={NotFound}/> 
        </Switch>                   
       </div>
    </Router>  
    </div>              
  );
}

export default App;
