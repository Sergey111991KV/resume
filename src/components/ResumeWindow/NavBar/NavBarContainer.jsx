import { connect } from 'react-redux';
import { exitTagCreator, mouseEnterTagCreator, touchTagCreator, mouseExitTagCreator,mouseEnterBlurTagCreator } from '../../../redux/resume-navbar-reducer';
import NavBar from './NavBar';


let mapStateToProps = (state) => {
  return {
    resumeNavPage : state.resumeNavPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return { 
    exitClick : () => {
      dispatch(exitTagCreator())
    },
    touchItemClick : (text) => {
      dispatch(touchTagCreator(text))
    },
    mouseMoveItem : (name) => {
      dispatch(mouseEnterTagCreator(name))
    },
    mouseExitItem : () => {
      dispatch(mouseExitTagCreator())
    },
    mouseBlurItemTouch : (name) => {
      dispatch(mouseEnterBlurTagCreator(name))
    }
  }
}
  
const NavBarContainer = connect (mapStateToProps,mapDispatchToProps) (NavBar)

export default NavBarContainer;