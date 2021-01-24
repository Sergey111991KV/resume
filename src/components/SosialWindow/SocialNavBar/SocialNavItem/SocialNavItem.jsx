import React from 'react'
import './SocialNavItem.css'
import {NavLink} from 'react-router-dom'

function SocialNavItem(props) {
  console.log(props.refAdress)
  return (
    <div className="social_network_navbar">
      <NavLink to={props.refAdress}>{props.name}</NavLink>
    </div>
  );
}

export default SocialNavItem;