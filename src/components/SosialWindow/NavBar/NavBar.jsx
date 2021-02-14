import React from 'react'
import './NavBar.css'
import NavItem from './NavItem/NavItem'

function NavBar() {
  return (
    <div className="social_network_NavBar">
      <NavItem name="Profile"refAdress="/social/profile"></NavItem>
      <NavItem name="Message" refAdress="/social/dialogs"></NavItem>
      <NavItem name="News" refAdress="/news"></NavItem>
      <NavItem name="Music" refAdress="/music"></NavItem>
      <NavItem name="Settings" refAdress="/settings"></NavItem>
      <NavItem name="Exit" refAdress="/resume"></NavItem>
    </div>
  );
}

export default NavBar;