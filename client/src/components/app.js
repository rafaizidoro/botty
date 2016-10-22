import React, { Component } from 'react';

import Toolbar from './toolbar';
import Content from './content';

import 'normalize.css';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Toolbar />
        <Content />
      </div>
    );
  }
}

export default App;
