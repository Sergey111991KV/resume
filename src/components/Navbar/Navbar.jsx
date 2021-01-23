import React from 'react'
import './Navbar.css'
import NavItem from './NavItem/NavItem'

function Navbar() {
  return (
    <div className="social_network_navbar">
      <NavItem></NavItem>
      <NavItem></NavItem>
      <NavItem></NavItem>
      <NavItem></NavItem>
      <NavItem></NavItem>
    </div>
  );
}

export default Navbar;