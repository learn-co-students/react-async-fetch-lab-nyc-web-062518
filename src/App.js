import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      astronauts: [],
      loading: true
    }
  }

  componentDidMount = () => {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => this.setState({astronauts: data.people, loading: false}))
  }


  render() {
    if (this.state.loading) {
      return (
        <div>
          <h1>Waiting for data...</h1>
        </div>
      )
    } else {
      return (
        <div>
          {this.state.astronauts.map(astro => {
            return (
              <div key={astro.name}>
                <h4>Name: {astro.name}</h4>
                <h5>Craft: {astro.craft}</h5>
              </div>
            )
          })}
        </div>
      )
    }
  }

}

export default App
