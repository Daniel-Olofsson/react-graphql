import * as React from "react";
import { NavLink } from 'react-router-dom'
import "./navbar.css"

function navbar(props) {
  return (
   <div>
        <ul>
          <div className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/graphql">gql</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </div>
        </ul>
        
    
    </div>
  )
}

export default navbar