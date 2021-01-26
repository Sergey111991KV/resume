import React from 'react'
import Person from './Person/Person'
import  "./Persons.css"


function Persons(props) {

  let personElement = props.persons.map(person => <Person id={person.id} name={person.name} />)
  return (
    <div className="social_dialogs_persons">
        {personElement}
    </div>
  );
}

export default Persons;