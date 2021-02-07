import React from 'react'
import './HeaderNavBar.css'

function HeaderNavBar (props) {
  return (
    <div className="nav_bar_header"  >
       {props.headerName}
    </div>
  );
}

export default HeaderNavBar;