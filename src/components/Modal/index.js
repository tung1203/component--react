import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #000;
  z-index: 9999;
  opacity: 0.5;
  display: block;
`;
const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  z-index: 99999;
  max-width: 500px;
  margin: 0 auto;
  visibility: hidden;
  opacity: 0;

  &.fadeup {
    animation-name: fadeUp;
    animation-duration: ${(props) => props.animationTime || ".3s"};
    animation-fill-mode: forwards;
  }
  &.fadeup-blur {
    animation-name: fadeUp-blur;
    animation-duration: ${(props) => props.animationTime || ".3s"};
    animation-fill-mode: forwards;
  }
  @keyframes fadeUp {
    from {
      transform: translate(-50%, -60%);
    }
    to {
      visibility: visible;
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  @keyframes fadeUp-blur {
    from {
      visibility: visible;
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    to {
      visibility: hidden;
      opacity: 0;
      transform: translate(-50%, -60%);
    }
  }
`;
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRender: this.props.isOpen,
    };
    this.modal = React.createRef();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isOpen && !this.props.isOpen) {
      const modal = ReactDOM.findDOMNode(this.modal.current);
      modal.classList.add("fadeup-blur");
      setTimeout(() => {
        this.setState({ shouldRender: false });
      }, this.props.animationTime);
    } else if (!prevProps.isOpen && this.props.isOpen) {
      this.setState({ shouldRender: true });
    }
  }
  render() {
    const { animationType, animationTime,children } = this.props;
    return this.state.shouldRender
      ? ReactDOM.createPortal(
          <>
            <Modal
              ref={this.modal}
              key="1"
              className={animationType}
              animationTime={`${100 / animationTime}s`}
            >
              {children}
            </Modal>
            <Overlay />
          </>,
          document.body
        )
      : null;
  }
}

index.defaultProps = {
  isOpen: false,
  animationType: "show",
};
export default index;
