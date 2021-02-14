import React from 'react'
import './NavBlur.css'
import NavItemBlur from './NavItemBlur';
import {Spring} from 'react-spring/renderprops'

function NavBlur(props) {

let blurArrayItems = props.blurArrayItem.map(nav => <NavItemBlur 
                                                key={nav.id}
                                                mouseBlurItemTouch ={props.mouseBlurItemTouch}
                                                touchItemClick={props.touchItemClick} 
                                                name={nav.name} 
    
/>)


return (
 <Spring
  from={{ opacity: 0 }}
  to={{ opacity: 1 }}
  config={{duration: 1000}}
  reset={true}
  >
  {props =>
    <div className="nav_main_items" style={props} >

    {blurArrayItems}
  </div>
  }
</Spring> 
)
  // return (
  //   <div className="nav_blur_items" >
  //     {blurArrayItems}
  //   </div>
  // );
}

export default NavBlur;