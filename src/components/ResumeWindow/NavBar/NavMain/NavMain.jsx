import React from 'react'
import NavItemMain from './NavItemMain';
import './NavMain.css'



function NavMain(props) {
  let mainArrayItems = props.array.map(nav => <NavItemMain  name={nav.name} 
    id={nav.id}
    touchItemClick={props.touchItemClick}
    exitClick={props.exitClick} 
    mouseMoveItem={props.mouseMoveItem}
/>)

  return (
    <div className="nav_main_items"  >

      {mainArrayItems}
    </div>
  );
}

export default NavMain;