// create your App component here
import React, { Component } from 'react'

class App extends Component {

render() {
  return (
    <div>Hi!</div>
  )
}

componentDidMount = () => {
  fetch('http://api.open-notify.org/astros.json').then(resp => resp.json()).then(data => console.log(data))
}

}


export default App
