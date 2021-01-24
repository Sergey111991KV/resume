import React from 'react'
import SocialDialogs from '../SocialContents/SocialDialogs/SocialDialogs'
import SocialFooter from '../SocialFooter/SocialFooter'
import SocialHeader from '../SocialHeader/SocialHeader'
import SocialNavBar from '../SocialNavBar/SocialNavBar'
import './SocialWindow.css'
import { BrowserRouter, Route } from "react-router-dom";
import SocialProfil from '../SocialContents/SocialProfil/SocialProfil'

function SocialWindow() {
  return (

      <div className='social_network'>
          <SocialHeader></SocialHeader>
          <SocialNavBar></SocialNavBar>
          <div>
                <Route path='/social/profile' component={SocialProfil} />
                <Route path='/social/dialogs' component={SocialDialogs}/>
            
          </div>
          <SocialFooter></SocialFooter>
      </div>

  );
}

export default SocialWindow;
