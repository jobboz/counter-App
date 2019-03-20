import React, { Component } from 'react';

//stateless fuctional component
const Navbar = ({totalCounters}) => {
    console.log("navbar-rendered")
    return (  <div>

        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
        </a>
        </nav>
    </div> );
}
 
export default Navbar;
