import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Controller extends Component {
  state = {
    isOpen: false,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
    },
  };
  open = () => {
    this.setState({ isOpen: true });
  };

  close = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { children } = this.props;
    const { isOpen, style } = this.state;

    const inputChildren = React.Children.map(children, (child) => {
      console.log(child);
      if (child.type.displayName === "Select") {
        return React.cloneElement(child, { open: this.open });
      } else {
        return (
          isOpen &&
          ReactDOM.createPortal(
            <span style={style}>{React.cloneElement(child)}</span>,
            document.body
          )
        );
      }
    });
    return inputChildren;
  }
}
