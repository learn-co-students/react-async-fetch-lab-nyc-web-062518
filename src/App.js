import React from 'react';
import ExampleComponent from './components/ExampleComponent.js'
import Greeting from './components/Greeting.js'
import ButtonComponent from './components/Button.js'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {peopleInSpace: []}
  }

  componentDidMount() {
    const url = "http://api.open-notify.org/astros.json"
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({
        peopleInSpace: data.people
      })
    })
  }

  render() {
    let people = this.state.peopleInSpace.map(person => {
      return <ExampleComponent person={person} key={person.name} />
    })
    return (
      <div>
        {people}
      </div>
    )
  }

}
