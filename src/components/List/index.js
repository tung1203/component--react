import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <ul className="list">
        {this.props.data.map((child) => (
          <li key={child.id}>{child.country}</li>
        ))}
      </ul>
    );
  }
}
