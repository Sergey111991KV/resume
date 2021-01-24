import './ResumeNavBar.css'
import ResumeNavItem from './ResumeNavItem/ResumeNavItem'

function ResumeNavBar() {

  return (
    <div className="social_network_NavBar">
      <ResumeNavItem name="Main" refAdress="/main"></ResumeNavItem>
      <ResumeNavItem name="About My Scills" refAdress="/main/scills"></ResumeNavItem>
      <ResumeNavItem name="Social Network" refAdress="/social"></ResumeNavItem>
    </div>
  );
}

export default ResumeNavBar;