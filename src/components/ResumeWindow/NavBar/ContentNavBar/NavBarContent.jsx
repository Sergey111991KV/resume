import React from 'react'
import './NavBarContent.css'
import {NavLink} from 'react-router-dom'


function isEmpty(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

function NavBarContent(props) {

  let funcRef = (it) => {
      if (it.refAdress === '') {
      } else {
        return  <NavLink  to={it.refAdress}>{it.name}</NavLink>
      }
    }

  if (isEmpty(props.mouseBlurItem)) {
    if (isEmpty(props.mouseItem)) {
      return (
        <div  className="nav_bar_content">
            {props.mainItem.content}
            {funcRef(props.mainItem)}
        </div>
      );
    }
    else {
      return (
        <div  className="nav_bar_content">
            {props.mouseItem.content}
            {funcRef(props.mouseItem)}
        </div>
      );
    }
  }  else {
    return (
      <div  className="nav_bar_content">
          {props.mouseBlurItem.content}
          {funcRef(props.mainItem)}
      </div>);
  }




}



export default NavBarContent;