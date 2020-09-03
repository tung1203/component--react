import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div
        className={this.props.className}
        style={this.props.style}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </div>
    );
  }
}
