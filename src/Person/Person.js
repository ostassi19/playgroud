import React from 'react'
import './Person.module.css'

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.moved}>I am {props.name} and I am {props.age} years old</p>
      <input onChange={props.changed} />
      <button onClick={props.deleted}>x</button>
    </div>
  )
}


export default person
