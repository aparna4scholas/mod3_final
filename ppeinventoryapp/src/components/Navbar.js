import React from 'react';
import { Link } from 'react-router-dom';



function Navbar () {
    const navStyle = {
        color: 'crimson'
    };

return(
  <nav>
   <h1> Personal Protective Equipmemt(PPE)  </h1>
   
   <ul className="navbar_link">
       <Link style={navStyle} to='/CityInfo'>
       <li> CityInfo</li>
       </Link>
       <Link  style={navStyle} to='/Dashboard'>
       <li> Dashboard</li>
       </Link>
       <Link style={navStyle} to='/CityInfoEdit/new'>
       <li> Add City </li>
       </Link >
        </ul>
</nav>
)
}

export default Navbar;

