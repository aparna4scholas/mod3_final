import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar.js';
import Masks from './components/Masks';
import Gloves from './components/Gloves';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import { render } from 'react-dom';

class App extends Component {


  render() {
    return (  
     <Router>
      <div className="App">
       
          <Navbar />
          <Switch>
          <Route path="/Dashboard"  component={Dashboard} />  
          <Route path="/Gloves" component={Gloves} /> 
          <Route path="/Masks" component={Masks} /> 
      
          </Switch>
        </div> 
      </Router>
      
    );
  }
}
  
  




export default App;