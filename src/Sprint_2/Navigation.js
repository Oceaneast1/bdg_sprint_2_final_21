import React from 'react'
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        
           <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container1">
          <p className="navbar-brand" to="/">
            Family Freezer Friend
          </p>
          <div>
            <nav className="navbar-nav ml-auto">
              <div className="nav-item">
                <NavLink className="nav-link" to="/" style={{textDecoration:'none', color:'white'}}>
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/Login" style={{textDecoration:'none', color:'white'}}>
                  Login
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/NewEntry" style={{textDecoration:'none', color:'white'}}>
                  New Entry
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/DisplayContents" style={{textDecoration:'none', color:'white'}}>
                  Display Contents
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div> 
    
    )
}

export default Navigation;
