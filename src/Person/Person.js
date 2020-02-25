import React from 'react'
import classes from'./Person.module.css'

const person = (props) => {
  return (
    <div className={classes.Person}>
      <h1 onClick= {props.deleted}>I'm {props.name}, my age {props.age}</h1>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed}/>
      
    </div>
  )
}

export default person