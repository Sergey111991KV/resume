import { exitTagCreator, mouseEnterTagCreator, touchTagCreator } from '../../../redux/resume-navbar-reducer';
import StoreContext from '../../../StoreContext';
import NavBar from './NavBar';


function NavBarContainer() {
    return (
      <StoreContext.Consumer>
        {
          (store) => {
            let state = store.getState().resumeNavPage

            let exitClick = () => {
                store.dispatch(exitTagCreator())
            }
            let touchItemClick = (text) => {
                store.dispatch(touchTagCreator(text))
            }  
            let mouseEnter = (id) => {
                store.dispatch(mouseEnterTagCreator(id))
            }

        return <NavBar state={state} exitClick={exitClick} touchItemClick={touchItemClick} mouseEnter={mouseEnter} />
        }
        }
      </StoreContext.Consumer>
    );
  }
  
  export default NavBarContainer;