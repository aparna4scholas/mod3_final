import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar.js';
import Masks from './components/Masks';
import Dashboard from './components/Dashboard';
import CityInfo from './components/CityInfo';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import { render } from 'react-dom';
import CityInfoEdit from './components/CityInfoEdit';

class App extends Component {


  render() {
    return (  
      
     <Router>
      <div className="App">
          
          <Navbar />
          <Switch>
          <Route path="/Dashboard" component={Dashboard} /> 
          <Route path="/CityInfo"  component={CityInfo} />
          <Route path="/CityInfoEdit/:cityName" component={CityInfoEdit} /> 
          <Route path="/Masks" component={Masks} /> 
      
          </Switch>
        </div> 
      </Router>
      
    );
  }
}
  
export default App;

