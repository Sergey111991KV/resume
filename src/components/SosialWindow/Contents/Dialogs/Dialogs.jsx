import React from 'react'
import './Dialogs.css'
import Messages from './Messages/Messages';
import Persons from './Persons/Persons';





function Dialogs(props) {
  console.log(props.refAdress)
  return (
    <div className="social_dialogs">
      <Persons persons={props.state.persons}></Persons>
      <Messages messages={props.state.messages}></Messages>
    </div>
  );
}

export default Dialogs;