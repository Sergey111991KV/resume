import React from 'react'
import './NavItem.css'
import {NavLink} from 'react-router-dom'

function NavItem(props) {
  return (
    <div className="social_network_navbar">
      <NavLink to={props.refAdress}>{props.name}</NavLink>
    </div>
  );
}

export default NavItem;