import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { className, style, onClick, text } = this.props;
    return (
      <div className={className} style={style} onClick={onClick}>
        {text}
      </div>
    );
  }
}
