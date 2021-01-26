import React from 'react'
import Message from './Message/Message'
import './Messages.css'


function Messages(props) {

  let messagesElement = props.messages.map(message => <Message id={message.id} textMessage={message.textMessage} />)
 
  return (
    <div className="social_dialogs_chat">
     {messagesElement}
    </div>
  );
}

export default Messages;