import React from 'react'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      peopleInSpace: []
    }
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(r=>r.json())
      .then(({people}) =>this.setState({peopleInSpace: people}))
  }

  render(){
    return(
      <div>
        {this.state.peopleInSpace.map((people, idx) => {
          return <h1 key={idx}>{people.name}</h1>
        })}
      </div>
    )

  }
}

export default App
