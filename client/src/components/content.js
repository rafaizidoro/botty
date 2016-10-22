import React, { Component } from "react";
import LinkFormContainer from "./link-form-container";
import "../styles/content.css";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <LinkFormContainer />
      </div>
    )
  }
}

export default Content;
