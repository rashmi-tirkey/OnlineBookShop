import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import './App.css';
import About from './components/about';
import Home from './components/Home';
import NotFound from './PageNotFound/NotFound';
import Login from './components/login'
function App() {
  return(
    <div className="container-fluid">
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
