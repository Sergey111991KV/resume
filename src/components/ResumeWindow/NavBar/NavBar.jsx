import './NavBar.css'
import NavItem from './NavItem/NavItem'

function NavBar() {

  return (
    <div className="social_network_NavBar">
      <NavItem name="Main" refAdress="/main"></NavItem>
      <NavItem name="About My Scills" refAdress="/main/scills"></NavItem>
      <NavItem name="Social Network" refAdress="/social"></NavItem>
    </div>
  );
}

export default NavBar;