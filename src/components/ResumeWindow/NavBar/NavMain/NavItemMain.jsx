import React from 'react'

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
    onMouseOver={funcMouseIn} 
          onClick={funcClick}
           >
          {props.name}
    </div>

    
  );
}

export default NavItemMain;