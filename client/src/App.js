import React, { Component } from 'react';
import socket from './socket';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { message: '', incoming: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    socket.onmessage = message => {
      this.setState({ incoming: message.data });
    };
  }

  handleClick() {
    socket.send(this.state.message)
  }

  handleChange(event) {
    this.setState({ message: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.incoming}</h1>

        <input type="text" value={this.state.message} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Enviar</button>
      </div>
    );
  }
}

export default App;
