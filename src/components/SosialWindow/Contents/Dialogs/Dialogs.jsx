import React from 'react'
import './Dialogs.css'
import Messages from './Messages/Messages';
import Persons from './Persons/Persons';





function Dialogs(props) {
  
  return (
    <div className="social_dialogs">
      <Persons persons={props.state.persons}></Persons>
      <Messages state={props.state} sendMessage={props.sendMessage} changeMessage={props.changeMessage}  ></Messages>
    </div>
  );
}

export default Dialogs;