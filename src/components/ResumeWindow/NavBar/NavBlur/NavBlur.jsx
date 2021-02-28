import React from 'react'
import './NavBlur.css'
import NavItemBlur from './NavItemBlur';


function NavBlur(props) {

let blurArrayItems = props.blurArrayItem.map(nav => <NavItemBlur 
                                                key={nav.id}
                                                mouseBlurItemTouch ={props.mouseBlurItemTouch}
                                                touchItemClick={props.touchItemClick} 
                                                name={nav.name} 
                                                    />)

  return (
    <div className="nav_blur_items" >
      {blurArrayItems}
    </div>
  );
}

export default NavBlur;