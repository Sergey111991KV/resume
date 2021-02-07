import NavBarContent from './ContentNavBar/NavBarContent'
import HeaderNavBar from './HeaderNavBar/HeaderNavBar'
import './NavBar.css'
import NavBlur from './NavBlur/NavBlur'

import NavMain from './NavMain/NavMain'









const funcMouseLeave = () => {
  console.log('funcMouseLeave')
  
}



function NavBar(props) {
    let mainItemArray =() => {
              let newMainItemArray = props.resumeNavPage.arrayAllItem.filter(item => item.mainTag == props.resumeNavPage.navMainItemDefault.name)
              return newMainItemArray
              }
                      
    let blurItemArray = () => {
              let newBlurItemArray = props.resumeNavPage.arrayAllItem.filter(item => item.mainTag == props.resumeNavPage.mouseEnterItem.name)
              return newBlurItemArray
            }
 
    


  return (



    <div className="social_network_NavBar_container"   >
        <HeaderNavBar  headerName={props.resumeNavPage.navMainItemDefault.name}  />
            <div className="window_Tags" 
                  onMouseLeave={props.mouseExitItem}
           >
              <NavMain  array={mainItemArray()}
                        mouseMoveItem={props.mouseMoveItem} 
                      
                        // mouseExitItem={}
                        touchItemClick={props.touchItemClick} 
              ></NavMain>
              <NavBlur blurArrayItem={blurItemArray()}
                      //  touchItemClick={props.touchItemClick}
                        >
                         
                       </NavBlur>
            </div>
         
            <NavBarContent  
                            
                            mouseItem={props.resumeNavPage.mouseEnterItem} 
                            mainItem={props.resumeNavPage.navMainItemDefault}
            ></NavBarContent>
        </div>
      
  );
}


export default NavBar;