import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div className={`tooltip tooltip--${this.props.place}`} data-text={this.props.title}>
        {this.props.children}
      </div>
    );
  }
}
