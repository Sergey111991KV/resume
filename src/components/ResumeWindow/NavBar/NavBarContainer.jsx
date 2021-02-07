import { connect } from 'react-redux';
import { exitTagCreator, mouseEnterTagCreator, touchTagCreator, mouseExitTagCreator } from '../../../redux/resume-navbar-reducer';
import NavBar from './NavBar';


// function NavBarContainer() {
//     return (
//       <StoreContext.Consumer>
//         {
//           (store) => {
//             let state = store.getState().resumeNavPage

//             let exitClick = () => {
//                 store.dispatch(exitTagCreator())
//             }
//             let touchItemClick = (text) => {
//                 store.dispatch(touchTagCreator(text))
//             }  
//             let mouseMoveItem = (name) => {
//                 store.dispatch(mouseEnterTagCreator(name))
//             }

//             let mouseExitItem = () => {
//               store.dispatch(mouseExitTagCreator())
//             }
         
 



//         return <NavBar  state={state} 
//                         exitClick={exitClick} 
//                         touchItemClick={touchItemClick} 
//                         mouseMoveItem={mouseMoveItem}
//                         mouseExitItem={mouseExitItem}
//                         arrayMainItem={mainItemArray()}
//                         arrayBlurItem={blurItemArray()}
//                         />
//         }
//         }
//       </StoreContext.Consumer>
//     );
//   }

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
      console.log('mouseExitItem')
      dispatch(mouseExitTagCreator())
    }
  }
}
  
const NavBarContainer = connect (mapStateToProps,mapDispatchToProps) (NavBar)

export default NavBarContainer;