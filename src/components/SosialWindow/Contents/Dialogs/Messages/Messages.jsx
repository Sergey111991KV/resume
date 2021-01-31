import React from 'react'
import Message from './Message/Message'
import './Messages.css'
import {updateNewMessageBodyCreator,sendMessageCreator} from '../../../../../redux/social-dialogs-reducer'

function Messages(props) {

  let messagesElement = props.state.messages.map(message => <Message id={message.id} textMessage={message.textMessage} />)

  let onSendMessageClick = () => {
    props.sendMessage()
  }
  let onNewMessageChange = (e) => {
    let body =  e.target.value
    props.changeMessage(body)
  }

  return (
    <div className="social_dialogs_chat">
     <div></div>{messagesElement}
     <div>
        <div><textarea 
                        value={props.state.newMessageBody} 
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