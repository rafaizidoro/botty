import React, { Component } from "react";
import LinkForm from './link-form';
import "../styles/link-form.css";

class LinkFormContainer extends Component {
  render() {
    return (
      <div className='link-form-container'>
        <LinkForm />
      </div>
    )
  }
}

export default LinkFormContainer;
