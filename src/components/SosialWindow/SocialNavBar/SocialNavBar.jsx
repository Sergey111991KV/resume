import React from 'react'
import './SocialNavBar.css'
import SocialNavItem from './SocialNavItem/SocialNavItem'

function NavBar() {
  return (
    <div className="social_network_NavBar">
      <SocialNavItem name="Profile"refAdress="/social/profile"></SocialNavItem>
      <SocialNavItem name="Message" refAdress="/social/dialogs"></SocialNavItem>
      <SocialNavItem name="News" refAdress="/news"></SocialNavItem>
      <SocialNavItem name="Music" refAdress="/music"></SocialNavItem>
      <SocialNavItem name="Settings" refAdress="/settings"></SocialNavItem>
      <SocialNavItem name="Exit" refAdress="/main"></SocialNavItem>
    </div>
  );
}

export default NavBar;