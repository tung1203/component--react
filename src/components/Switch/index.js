import React, { Component } from "react";
import PropTypes from "prop-types";
import withTheme from "../../withTheme";
import StyledSwitch from "./StyledSwitch";

class Switch extends Component {
  handleSwitch = () => {
    const { toggleSwitchActive } = this.props;
    toggleSwitchActive();
  };

  render() {
    const { isActive, type, theme } = this.props;
    return (
      <StyledSwitch
        className={`${isActive ? "trigger" : ""}`}
        onClick={this.handleSwitch}
        theme={theme}
        type={type}
      >
        <span className="slider" />
      </StyledSwitch>
    );
  }
}

Switch.propTypes = {
  isActive: PropTypes.bool,
  type: PropTypes.string,
  toggleSwitchActive: PropTypes.func,
  theme: PropTypes.object
};
export default withTheme(Switch);
