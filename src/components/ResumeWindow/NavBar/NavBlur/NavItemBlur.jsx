import React from 'react'
import './NavItemBlur.css'


function NavItemBlur(props) {

  const touchItemFunc = () => {
      props.touchItemClick(props.name)
  }

  const funcMouseIn = () => {
    props.mouseBlurItemTouch(props.name)
  }
  

  return (
    <div className="nav_bar_item_blur" 
        onClick={touchItemFunc} 
        onMouseMove={funcMouseIn}
        >
       {props.name}
    </div>
  );
}

export default NavItemBlur;