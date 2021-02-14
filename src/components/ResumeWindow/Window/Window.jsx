import React from 'react'
import NavBarContainer from '../NavBar/NavBarContainer'
import {Spring} from 'react-spring/renderprops'

function ResumeWindow() {
  return (


<Spring
  from={{ opacity: 0 }}
  to={{ opacity: 1 }}
  config={{duration: 2000}}
  >
  {props =>
     <div className='resume_window' style ={props}>
          <NavBarContainer></NavBarContainer>
      </div>
   
   }
</Spring>
      // <div className='resume_window'>
      //     <NavBarContainer></NavBarContainer>
      // </div>




  );
}

export default ResumeWindow;
