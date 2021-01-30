import React from 'react'
import Dialogs from '../Contents/Dialogs/Dialogs'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import './Window.css'
import { BrowserRouter, Route } from "react-router-dom";
import Profil from '../Contents/Profil/Profil'


function SocialWindow(props) {

  return (
      <div className='social_network'>
          <Header></Header>
          <NavBar></NavBar>
          <div>
                <Route path='/social/profile' render={ () => <Profil 
                                                                store={props.store} 
                                                              />} 
                />
                <Route path='/social/dialogs' render={ () => <Dialogs store={props.store} />}/>
            
          </div>
          <Footer></Footer>
      </div>

  );
}

export default SocialWindow;
