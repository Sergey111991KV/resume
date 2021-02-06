import React from 'react'
import './NavItemBlur.css'


function NavItemBlur(props) {

  const touchItemFunc = () => {
      props.touchItemClick(props.name)
  }
  

  return (
    <div className="nav_bar_item_blur" onClick={touchItemFunc} >
       {props.name}
    </div>
  );
}

export default NavItemBlur;