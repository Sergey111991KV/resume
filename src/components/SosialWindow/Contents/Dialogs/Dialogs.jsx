import React from 'react'
import './Dialogs.css'
import Messages from './Messages/Messages';
import Persons from './Persons/Persons';





function Dialogs(props) {
  let state = props.store.getState().socialWindow.dialogsPage
  return (
    <div className="social_dialogs">
      <Persons persons={state.persons}></Persons>
      <Messages store={props.store}></Messages>
    </div>
  );
}

export default Dialogs;