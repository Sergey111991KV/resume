import React from 'react'
import './NavItemMain.css'


function NavItemMain(props) {

  const funcMouse = () => {
    props.mouseEnter(props.name)
  }

  const funcClick = () => {
    props.touchItemClick(props.name)
  }
 
  const f = () => { console.log('dd')}
  return (
    <div className="nav_bar_item_main" onMouseEnter={funcMouse} onClick={funcClick} >
       {props.name}
    </div>
  );
}

export default NavItemMain;