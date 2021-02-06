import NavBarContent from './NavBarContent/NavBarContent'
import HeaderNavBar from './HeaderNavBar/HeaderNavBar'
import './NavBar.css'
import NavBlur from './NavBlur/NavBlur'
import NavItemBlur from './NavBlur/NavItemBlur'
import NavItemMain from './NavMain/NavItemMain'
import NavMain from './NavMain/NavMain'

function NavBar(props) {
  let defaultItem = props.state.navMainItemDefault

  const mainArrayItem = () => {


      let arrMainItem = props.state.arrayNavItem.filter(i => i.mainTag == props.state.navMainItemDefault.name)
      if (props.state.navMainItemDefault.name === 'Menu') {
        return arrMainItem
      } else {
        return arrMainItem
        // [arrMainItem,  {id: 10, mainTag: 'Back', name: 'Back', refAdress: "/main"}]
      }

  }
  const blurArrayItem = () => {
    let blurArray = props.state.arrayNavItem.filter(i => i.mainTag == props.state.mouseEnterValue)
    return blurArray
  }

  const contentValue = () => {
    if (props.state.mouseEnterValue === '') {
      return defaultItem
    }
    let newMouseItem = props.state.arrayNavItem.find(item => item.name == props.state.mouseEnterValue)
    return newMouseItem
  }

 
  // let navBlurElement = blurArrayItem().map(nav => <NavItemBlur  name={nav.name} 
  //                                                               touchItemClick={props.touchItemClick}
  //                                                           />)
  return (

        <div className="social_network_NavBar_container" onMouseMove={console.log('NavMain')}>
            <HeaderNavBar  headerName={props.state.navMainItemDefault.name}/>
            <div className="window_Tags">
              <NavMain mainArrayItem={mainArrayItem()} mouseEnter={props.mouseEnter} touchItemClick={props.touchItemClick} ></NavMain>
              <NavBlur blurArrayItem={blurArrayItem()} touchItemClick={props.touchItemClick} ></NavBlur>
            </div>
         
            <NavBarContent  state={contentValue()}
                            // name={defaultItem.name} 
                            // content={defaultItem.content} 
                            // refAdress={defaultItem.refAdress} 
            ></NavBarContent>



 
         
          {/* <div className="main_items" >
            mainItem
          {navMainElement}
          </div> */}
          {/* <div className='blur_items'>
            BlurItem
            {navBlurElement}
          </div> */}
          {/* <div className='content_nav_bar'>
            Content
          <ContentNavBar content={props.content}></ContentNavBar>
          </div> */}
         
        </div>
      
  );
}

// .main_item{
//   grid-area: mTag;
//   background-color: rgb(115, 107, 189);
// }
// .main_items{
//   grid-area: mTags;
//   background-color: rgb(107, 189, 138);
// }

// .blur_items{
//   grid-area: bTags;
//   background-color: rgb(147, 189, 107);
// }

// .content_nav_bar{
//   grid-area: cont;
//   background-color: rgb(147, 189, 107);




export default NavBar;