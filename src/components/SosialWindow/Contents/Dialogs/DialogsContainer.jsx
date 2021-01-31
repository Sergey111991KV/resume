import React from 'react'
import Dialogs  from "./Dialogs";
import { sendMessageCreator,updateNewMessageBodyCreator } from "../../../../redux/social-dialogs-reducer";





function DialogsContainer(props) {

  let state = props.store.getState().dialogsPage

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageBodyCreator(text))
  }

  
  return (
  <Dialogs state={state} sendMessage={onSendMessageClick} changeMessage={onNewMessageChange} />


  );
}

export default DialogsContainer;