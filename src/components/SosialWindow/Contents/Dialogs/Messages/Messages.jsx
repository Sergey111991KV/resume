import React from 'react'
import Message from './Message/Message'
import './Messages.css'
import {updateNewMessageBodyCreator,sendMessageCreator} from '../../../../../redux/social-dialogs-reducer'

function Messages(props) {
  let state = props.store.getState().socialWindow.dialogsPage
  let messagesElement = state.messages.map(message => <Message id={message.id} textMessage={message.textMessage} />)
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (e) => {
    let body =  e.target.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className="social_dialogs_chat">
     <div></div>{messagesElement}
     <div>
        <div><textarea 
                        value={state.newMessageBody} 
                        placeholder='Enter your message' 
                        onChange={onNewMessageChange}
            ></textarea>
        </div>
        <div><button onClick={onSendMessageClick} >Send</button></div>
     </div>
    
    </div>
  );
}

export default Messages;