import React from 'react'
import './ResumeNavItem.css'
import {NavLink} from 'react-router-dom'

function ResumeNavItem(props) {
    console.log(props.refAdress)
  return (
    <div className="social_network_NavBar">
        <NavLink  to={props.refAdress}> {props.name}</NavLink>
    </div>
  );
}

export default ResumeNavItem;