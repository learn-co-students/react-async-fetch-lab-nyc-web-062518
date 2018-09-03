import React, { Component } from 'react';

class ExampleComponent extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <strong>Name: {this.props.person.name}</strong>
        <p>Craft: {this.props.person.craft}</p>
      </div>
    )
  }
}

export default ExampleComponent;
