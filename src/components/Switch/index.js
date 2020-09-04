import React, { Component } from "react";

export default class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
    };
  }
  handleSwitch = () => {
    this.setState({ trigger: !this.state.trigger });
  };
  render() {
    return (
      <div
        className={`switch switch--round ${
          this.state.trigger ? "trigger" : ""
        }`}
        onClick={this.handleSwitch}
      >
        <span className="slider"></span>
      </div>
    );
  }
}
