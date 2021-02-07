import React from 'react'
import './NavItemMain.css'





function NavItemMain(props) {

  const funcMouseIn = () => {
    console.log('funcMouseIn')
    props.mouseMoveItem(props.name)
  }

  // const funcMouseOut = () => {
  //   console.log('funcMouseOut')
  //   props.mouseExitItem()
  // }

  const funcClick = () => {
    props.touchItemClick(props.name)
  }
 
  const f = () => { console.log('dd')}
  return (
    <div className="nav_bar_item_main" 
          onMouseMove={funcMouseIn} 
          // onMouseOut={funcMouseOut}
          onClick={funcClick}
           >
          {props.name}
    </div>
  );
}

export default NavItemMain;