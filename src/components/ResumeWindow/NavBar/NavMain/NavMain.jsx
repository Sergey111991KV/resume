import React from 'react'
import NavItemMain from './NavItemMain';
import './NavMain.css'
import {Spring} from 'react-spring/renderprops'



function NavMain(propss) {
  let mainArrayItems = propss.array.map(nav => <NavItemMain  name={nav.name}
    key={nav.id} 
    id={nav.id}
    touchItemClick={propss.touchItemClick}
    exitClick={propss.exitClick} 
    mouseMoveItem={propss.mouseMoveItem}
/>)


  return (  
   
      <div className="nav_main_items" >
        {mainArrayItems}
      </div>

  );
}

export default NavMain;