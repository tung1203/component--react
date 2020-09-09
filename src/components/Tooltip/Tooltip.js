import React, { Component } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import StyledToolTip from "./StyledToolTip";

class Tooltip extends Component {
  render() {
    const { title, placement, x, y } = this.props;
    return ReactDom.createPortal(
      <StyledToolTip placement={placement} data-text={title} x={x} y={y} />,
      document.body
  );
  }
}
Tooltip.propTypes = {
  title: PropTypes.string,
  placement: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number
};
export default Tooltip;
