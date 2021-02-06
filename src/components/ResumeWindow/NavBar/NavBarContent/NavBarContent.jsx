import React from 'react'
import './NavBarContent.css'
import {NavLink} from 'react-router-dom'

function NavBarContent(props) {
  let funcRef = () => {
    if (props.state.refAdress === '') {
    } else {
      return  <NavLink  to={props.state.refAdress}>{props.state.name}</NavLink>
    }
  }

  return (
    <div className="nav_bar_content" >
        {props.state.content}
        {funcRef()}
    </div>
  );
}

export default NavBarContent;