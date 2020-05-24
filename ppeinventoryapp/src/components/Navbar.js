import React from 'react';
import { Link } from 'react-router-dom';


function Navbar () {
    const navStyle = {
        color: 'white'
    };

return(

  
  <nav>
   <h1>  PPE inventory </h1>
   <ul className="navbar_link">
       <Link style={navStyle} to='/Dashboard'>
       <li> Dashboard</li>
       </Link>
       <Link  style={navStyle} to='/Gloves'>
       <li> Gloves</li>
       </Link>
       <Link style={navStyle} to='Masks'>
       <li> Masks</li>
       </Link >
        </ul>
</nav>
 

)
}

export default Navbar;