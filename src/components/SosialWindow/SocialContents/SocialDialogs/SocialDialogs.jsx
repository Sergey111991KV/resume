import React from 'react'
import './SocialDialogs.css'
import SocialDialogsChat from './SocialDialogsChat/SocialDialogsChat';
import SocialDialogsPerson from './SocialDialogsPerson/SocialDialogsPerson';


function SocialDialogs(props) {
  console.log(props.refAdress)
  return (
    <div className="">
      <SocialDialogsPerson></SocialDialogsPerson>
      <SocialDialogsChat></SocialDialogsChat>
    </div>
  );
}

export default SocialDialogs;