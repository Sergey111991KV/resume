import './NavBar.css'
import NavItem from './NavItem/NavItem'

function NavBar(props) {
  debugger
  let navMainElement = props.state.map(nav => <NavItem name={nav.name} refAdress={nav.refAdress} />)
  return (

        <div className="social_network_NavBar">
          {navMainElement}
        </div>
      
  );
}

export default NavBar;