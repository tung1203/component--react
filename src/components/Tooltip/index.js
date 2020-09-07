import React, { Component } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const TooltipStyle = styled.div`
  position: absolute;
  display: inline-block;
  transform: translate(-50%, -50%);
  top: ${(props) => props.y + "px" || "0"};
  left: ${(props) => props.x + "px" || "0"};

  &:before {
    content: attr(data-text);
    width: auto;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 10px;
    border-radius: 6px;
    transform: translate(-50%, -50%);
`;

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      x: 0,
      y: 0,
    };
  }
  _setPositionTooltip = (evt) => {
    const el = evt.currentTarget;

    if (el != null) {
      const rect = el.getBoundingClientRect();
      if (this.props.placement === "top") {
        this.setState({
          isShow: true,
          x: rect.x + rect.width / 2,
          y: rect.y - rect.height,
        });
      }
    }
  };
  _removePositionTooltip = () => {
    this.setState({
      isShow: false,
    });
  };
  componentDidMount() {
    this.ref.addEventListener("mouseover", this._setPositionTooltip);
    this.ref.addEventListener("mouseleave", this._removePositionTooltip);
  }
  render() {
    const { title, placement, children } = this.props;
    const { isShow, x, y } = this.state;
    return (
      <>
        {React.cloneElement(children, { ref: (el) => (this.ref = el) })}
        {isShow && <Tooltip title={title} placement={placement} x={x} y={y} />}
      </>
    );
  }
}
class Tooltip extends Component {
  render() {
    const { title, placement, x, y } = this.props;
    return ReactDom.createPortal(
      <TooltipStyle placement={placement} data-text={title} x={x} y={y} />,
      document.body
    );
  }
}
export default index;
