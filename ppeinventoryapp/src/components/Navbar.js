import React from 'react';
import { Link } from 'react-router-dom';


function Navbar () {
    const navStyle = {
        color: 'crimson'
    };

return(

  
  <nav>
   <h1> PersonalProtectiveEquipmemt  </h1>
   
   <ul className="navbar_link">
       <Link style={navStyle} to='/Dashboard'>
       <li> Citydata</li>
       </Link>
       <Link  style={navStyle} to='/Gloves'>
       <li> Gloves</li>
       </Link>
       <Link style={navStyle} to='/Masks'>
       <li> Masks</li>
       </Link >
        </ul>
</nav>
 

)
}

export default Navbar;