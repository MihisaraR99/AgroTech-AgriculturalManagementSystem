import React from "react";
import {Link} from 'react-router-dom';
import sprout from './sprout.png';

function Header() {
    return(
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
      <div>
      <img src={sprout} style={{ width: '40px', height: '40px', borderRadius: '50%', borderBlockColor: 'black', opacity: '70%'}}/>
     <a className="navbar-brand" href="#">AgroTech</a>
     </div>
     <div className="ml-auto" >
     <ul className="navbar-nav">
         <li className="nav-item">
             <a className="nav-link" href="#">Home</a>
         </li>
         <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Services</a>
             <div className="dropdown-menu">
                 <a className="dropdown-item" href="#">All Services</a>
                 <a className="dropdown-item" href="#">For Companies</a>
             </div>
         </li>
         <li className="nav-item">
             <a className="nav-link" href="#">Event & Contact Support</a>
         </li>
         <li className="nav-item">
             <a className="nav-link" href="#">Contact</a>
         </li>
         <li className="nav-item">
             <a className="nav-link" href="#">Help</a>
         </li>
     </ul>
     </div>
  </nav>
    )
}


export default Header;