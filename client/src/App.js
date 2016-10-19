import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {a: null, b:null, c:null }
  }

  componentDidMount() {
    fetch("/api")
      .then(data => data.json())
      .then(data => this.setState(data));
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
