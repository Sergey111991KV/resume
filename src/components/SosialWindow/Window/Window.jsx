import React from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import './Window.css'
import {  Route } from "react-router-dom";
import Profil from '../Contents/Profil/Profil'
import DialogsContainer from '../Contents/Dialogs/DialogsContainer'
import UsersContainer from '../Contents/Users/UsersContainer'


function SocialWindow(props) {

  return (
      <div className='social_network'>
          <Header></Header>
          <NavBar></NavBar>
          <div>
                <Route path='/social/profile' render={ () => <Profil />} />
                <Route path='/social/dialogs' render={ () => <DialogsContainer />}/>
                <Route path='/social/users' render={ () => <UsersContainer />}/>
            
          </div>
          <Footer></Footer>
      </div>

  );
}

export default SocialWindow;
