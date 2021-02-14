import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBarContentItem.css'


let funcRef = (it) => {
    debugger
    window.open(it);
        // console.log(it)
       {/* <button onClick={() => console.log(it.refAdress)}> HI</button>
           {/* <a ref="https://github.com/Sergey111991KV/thirdServer">GIt</a>  */}
                  {/* <NavLink  to={it.refAdress}>{it.name}</NavLink> */} 
               
      }
    

function NavBarContentItem(props) {

    if (props.refs == "" ) {
        return (
            <div>        
                {props.content}    
            </div>
        )
    } else {
        if (props.refs == "/") {
          return(  <div>
                <div>
                {props.content}
                </div>
                <div>
                <button onClick={() => {funcRef(props.link)}}>REF</button>
                </div>
               
            </div>
          )
        } else {
        return (
        
            <div>
                <div>
                {props.content}
                </div>
                <div>
                <NavLink  to={props.refs}>{props.name}</NavLink>
                </div>
           
            </div>
        )
        }
    }
   
    }

export default  NavBarContentItem;