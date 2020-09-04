import React, { Component } from "react";
import ReactDom from "react-dom";

export default class index extends Component {
  render() {
    const { title, place, children } = this.props;
    return ReactDom.createPortal(
      <div className={`tooltip tooltip--${place}`} data-text={title}>
        {children}
      </div>,
      document.body
    );
  }
}
