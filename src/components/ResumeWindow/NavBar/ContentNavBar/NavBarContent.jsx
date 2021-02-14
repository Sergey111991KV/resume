import React from 'react'
import './NavBarContent.css'
import {Link, NavLink} from 'react-router-dom'
import {Spring} from 'react-spring/renderprops'
import NavBarContentItem from "./NavBarContentItem"


function isEmpty(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}


function NavBarContent(propss) {
 

  if (isEmpty(propss.mouseBlurItem)) {
    if (isEmpty(propss.mouseItem)) {
      return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{duration: 500}}
                reset={true}
            >
                {props =>
                  <div  className="nav_bar_content" style={props}>
                    <NavBarContentItem name={propss.mainItem.name} content={propss.mainItem.content} refs={propss.mainItem.refAdress} link={propss.mainItem.link}/>

                   </div>
                }
            </Spring> 
            )
        }
        else {
          return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{duration: 500}}
                reset={true}
            >
                {props =>
                   <div  className="nav_bar_content" style={props}>
                      <NavBarContentItem name={propss.mouseItem.name} content={propss.mouseItem.content} refs={propss.mouseItem.refAdress} link={propss.mouseItem.link}/>
                  </div>
                }
            </Spring> 
            )

        }
       } else {
          return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{duration: 500}}
                reset={true}
            >
                {props =>
                     <div  className="nav_bar_content" style={props}>
                         <NavBarContentItem name={propss.mouseBlurItem.name} content={propss.mouseBlurItem.content} refs={propss.mouseBlurItem.refAdress} link={propss.mouseBlurItem.link}/>
                      </div>
                }
            </Spring> 
            )
        }

    
  
        
  //       <div  className="nav_bar_content">
  //           {props.mainItem.content}
  //           {funcRef(props.mainItem)}
  //       </div>
  //     );
  //   }
  //   else {
  //     return (
  //       <div  className="nav_bar_content">
  //           {props.mouseItem.content}
  //           {funcRef(props.mouseItem)}
  //       </div>
  //     );
  //   }
  // }  else {
  //   return (
  //     <div  className="nav_bar_content">
  //         {props.mouseBlurItem.content}
  //         {funcRef(props.mainItem)}
  //     </div>);
  // }




}



export default NavBarContent;