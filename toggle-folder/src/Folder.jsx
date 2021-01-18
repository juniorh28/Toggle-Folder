import React, { Component } from "react";
import "./Folder.css";

export default class Folder extends Component {
  state = {
    toggle: true,
  };

  toggleButton = () => {
    if (this.state.toggle) {
      this.setState({ toggle: false });
    } else {
      this.setState({ toggle: true });
    }
  };

  render() {
    return (
      <div className="container">
        <button className="button" onClick={this.toggleButton}>
          Toggle
        </button>
        <h1>Home</h1>
        {this.state.toggle === true ? (
          <ul className="files">
            <li>File1</li>
            <li>File2</li>
            <li>File3</li>
          </ul>
        ) : (
          <nothing></nothing>
        )}
      </div>
    );
  }
}
