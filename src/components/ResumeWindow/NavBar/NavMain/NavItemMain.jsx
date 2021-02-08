import React from 'react'
import { connect } from 'react-redux'
import './NavItemMain.css'





function NavItemMain(props) {

  const funcMouseIn = () => {
      props.mouseMoveItem(props.name)
    
  }

  const funcClick = () => {
    if (props.name === "Exit") {
       props.exitClick()
    } else {
      props.touchItemClick(props.name)
    }
   
  }
  return (
    <div className="nav_bar_item_main" 
          onMouseMove={funcMouseIn} 
          onClick={funcClick}
           >
          {props.name}
    </div>
  );
}

export default NavItemMain;