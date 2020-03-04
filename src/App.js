import React, { Component } from "react"
import './App.css'
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id: "asd", name: "Amani", age: 21, list: "A" },
      { id: "sdf", name: "houssem", age: 20, list: "A" },
      { id: "frz", name: "youssef", age: 16, list: "A" },
      { id: "kul", name: "ala", age: 23, list: "A" }
    ],
    showPersons: true,
    titleColor: "black"
  }

  switchNameHandler = () => {
    console.log("Button was clicked !!")

    // this.state.persons[1].name = "Mohmaed"

    const newPersons = [...this.state.persons]
    newPersons[0].name = "Ahmed"

    this.setState({
      persons: newPersons
    })
  }

  changeNameHandler = (event, person) => {
    // console.log(event)

    const newPersons = [...this.state.persons]
    const index = newPersons.indexOf(person)
    newPersons[index].name = event.target.value

    this.setState({
      persons: newPersons
    })
  }

  showPersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (person) => {
    const newPersons = [...this.state.persons]
    const index = newPersons.indexOf(person)
    newPersons.splice(index, 1)

    this.setState({
      persons: newPersons
    })
  }

  generatePersonsList = (personsArray, targetList) => {

    const selectedPersons = personsArray.filter((person) => {
      return person.list === targetList
    })

    const personsList = selectedPersons.map((person) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          changed={(event) => { return this.changeNameHandler(event, person) }}
          deleted={() => { this.deletePersonHandler(person) }}
          moved={() => { this.movePersonHandler(person) }}
          key={person.id} />
      )
    })

    return personsList
  }

  movePersonHandler = (person) => {
    const newPersons = [...this.state.persons]
    const index = newPersons.indexOf(person)

    if (newPersons[index].list === "A")
      newPersons[index].list = "B"
    else
      newPersons[index].list = "A"

    this.setState({
      persons: newPersons
    })
  }

  changeColorHandler = () => {

    let newColor = "black"

    if (this.state.titleColor === "black")
      newColor = "red"

    this.setState({
      titleColor: newColor
    })
  }

  render() {

    let personsListA = null
    let personsListB = null

    if (this.state.showPersons) {
      personsListA = this.generatePersonsList(this.state.persons, "A")
      personsListB = this.generatePersonsList(this.state.persons, "B")
    }

    return (
      <div className="App">
        <h1 style={{ color: this.state.titleColor }}>Hello React World !!</h1>

        <button onClick={this.switchNameHandler}>Switch Name</button>
        <button onClick={this.showPersonsHandler}>Toggle Persons</button>
        <button onClick={this.changeColorHandler}>Change Title Color</button>

        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <h2>Liste A</h2>
            {personsListA}
          </div>

          <div style={{ width: '50%' }}>
            <h2>Liste B</h2>
            {personsListB}
          </div>
        </div>

      </div>
    )
  }
}

export default App