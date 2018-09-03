// create your App component here
import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(json => this.setState({...this.state, name: json.people.map(person => person.name)}))
  }

  render() {
    return (
    <ul>
      {this.state.name.map((name, index) => <li key={index}>{name}</li>)}
    </ul>
    )
  }
}

export default App
