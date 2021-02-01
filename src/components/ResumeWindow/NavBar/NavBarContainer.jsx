import StoreContext from '../../../StoreContext';
import NavBar from './NavBar';

function NavBarContainer() {
    return (
      <StoreContext.Consumer>
        {
          (store) => {
            let state = store.getState().resumeNavPage
            debugger

        return <NavBar state={state.arrayNavItem}  />
        }
        }
      </StoreContext.Consumer>
    );
  }
  
  export default NavBarContainer;