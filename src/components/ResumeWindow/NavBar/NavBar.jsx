import NavBarContent from './ContentNavBar/NavBarContent'
import HeaderNavBar from './HeaderNavBar/HeaderNavBar'
import './NavBar.css'
import NavBlur from './NavBlur/NavBlur'

import NavMain from './NavMain/NavMain'


function NavBar(props) {
    let mainItemArray =() => {
              let newMainItemArray = props.resumeNavPage.arrayAllItem.filter(item => item.mainTag == props.resumeNavPage.navMainItemDefault.name)
              if (props.resumeNavPage.navMainItemDefault.mainTag == '') {
                return [...newMainItemArray ]
              } else {
                return [...newMainItemArray,{id: 13, mainTag: '', name: 'Exit', refAdress: "/main", content: ''} ]
              }
             
             
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
                        exitClick={props.exitClick}
                        touchItemClick={props.touchItemClick} 
              ></NavMain>
              <NavBlur blurArrayItem={blurItemArray()}
                       touchItemClick={props.touchItemClick}
                       mouseBlurItemTouch={props.mouseBlurItemTouch}
                        >
                         
                       </NavBlur>
            </div>
         
            <NavBarContent  
                            mouseBlurItem ={props.resumeNavPage.mouseBlurItem} 
                            mouseItem={props.resumeNavPage.mouseEnterItem} 
                            mainItem={props.resumeNavPage.navMainItemDefault}
            ></NavBarContent>
        </div>
      
  );
}


export default NavBar;