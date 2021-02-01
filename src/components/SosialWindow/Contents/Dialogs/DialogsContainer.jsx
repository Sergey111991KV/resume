import React from 'react'
import Dialogs  from "./Dialogs";
import { sendMessageCreator,updateNewMessageBodyCreator } from "../../../../redux/social-dialogs-reducer";
import StoreContext from '../../../../StoreContext';





function DialogsContainer(props) {
  
  return (
    <StoreContext.Consumer>
        {  (store) => {
                let state = store.getState().dialogsPage

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onNewMessageChange = (text) => {
                    store.dispatch(updateNewMessageBodyCreator(text))
                }   
            return <Dialogs state={state} sendMessage={onSendMessageClick} changeMessage={onNewMessageChange} />
            }
        }
      
  </StoreContext.Consumer> 

  );
}

export default DialogsContainer;