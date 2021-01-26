import React from 'react'
import { NavLink } from 'react-router-dom';



function Person(props) {
  return (
    <NavLink to={'/social/dialogs/' + props.id}>
        {props.name}
    </NavLink>
  );
}

export default Person;