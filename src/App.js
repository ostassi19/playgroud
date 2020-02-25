import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person.js'


// const app = () => {
//   return (
//     <div className="App">
//       <h1>Hello React!!</h1>
//     </div>
//   )
// }
// compoment ya ikoun class based component wala functiinal base component 
class App extends Component {
  state={// nsajlou feha variable wa react listen lel chagement 
    persons : [
      {id:"zzz", name: "amani", age: "21"},
      {id:"aaa", name: "houssem", age: "20"},
      {id:"eee",name: "youssef", age: "16"},
      {id:"xxx",name: "houssem", age: "20"},
      {id:"www",name: "youssef", age: "16"}
    ],
    showPerson : true
  }

  


// ... : spred opperator
  switchNameHandler= () =>{
    //console.log("was clicked")

    const newPersons =[...this.state.persons]
    newPersons[0].name="Salim"
    // pour modifier state on fait un copie surlaquel on effectue les modifications necessaire

    this.setState({// bech na3mlou chagement au niveau des références 
      // persons:[
      //   {name: "mouna", age: "21"},
      // {name: "mounira", age: "22"},
      // {name: "monya", age: "23"}
      // ]

      persons: newPersons
    })
  }

  switchChageHandler=(event,id) =>{

    console.log("change name handler")
    const newPersons =[...this.state.persons]
    const index = newPersons.findIndex((person)=>{
      return person.id===id
    })
    newPersons[index].name= event.target.value

    this.setState({
     
      persons: newPersons
    })

  }


  switchDeletePersonHandler=(person)=>{
    console.log("delete Person")
    const newPersons =[...this.state.persons]
    const index = newPersons.indexOf(person)
    newPersons.splice(index,1)

    this.setState({
      persons: newPersons
    })
  }

  showPersonsHandler=() =>{
    this.setState({
      showPerson: ! this.state.showPerson
    })
  }


  render() {

    let personComponents=null
    
    if(this.state.showPerson)
      personComponents=(
        
        <div>
          {this.state.persons.map((person,index)=>{
            return(
              <Person name= {person.name} 
              age={person.age} 
              changed={(event)=> {this.switchChageHandler(event,person.id)}}
              deleted={()=>{this.switchDeletePersonHandler(person)}}
              key={index} />
            )
          })}
        </div>
      )


    return (
      <div className="App">
        <h1>Hello React!!</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <button onClick={this.showPersonsHandler}>taggle persons</button>
        
        
        {personComponents}
      </div>
    )
  }
}

export default App 
