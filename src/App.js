// create your App component here
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      data: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json').then(r=>r.json()).then(data => {
      this.setState({
        loaded: true,
        data: data
      })
    })
  }

  render() {
    if (this.state.loaded) {
      const mappedAstronauts = this.state.data.people.map(person => {
        return(
          <div>
            <p>{person.name}</p>
            <p>{person.craft}</p>
          </div>
        )
      })

      return(
        <div>
          {mappedAstronauts}
        </div>
      )
    }

    else {
      return(
        <h1>Loading</h1>
      )
    }

  }

}

export default App
