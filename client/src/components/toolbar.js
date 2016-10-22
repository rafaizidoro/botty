import React, { Component } from 'react';

import '../styles/toolbar.css';
import logo from '../assets/botty.png';

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <div className="toolbar-content">
        <h1><img src={logo} /></h1>
      </div>
      </div>
    );
  }
}

export default Toolbar;
