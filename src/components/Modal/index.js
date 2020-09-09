import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Overlay, StyledModal } from "./StyledModal";

class Modal extends Component {
  constructor(props) {
    super(props);
    const { isOpen } = this.props;
    this.state = {
      shouldRender: isOpen
    };
    this.modal = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { isOpen, animationTime } = this.props;
    if (prevProps.isOpen && !isOpen) {
      // eslint-disable-next-line react/no-find-dom-node
      const modal = ReactDOM.findDOMNode(this.modal.current);
      modal.classList.add("fadeup-blur");
      setTimeout(() => {
        this.setState({ shouldRender: false });
      }, animationTime);
    } else if (!prevProps.isOpen && isOpen) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ shouldRender: true });
    }
  }

  render() {
    const { animationType, animationTime, children } = this.props;
    const { shouldRender } = this.state;

    return shouldRender
      ? ReactDOM.createPortal(
        <>
          <StyledModal
            ref={this.modal}
            key="1"
            className={animationType}
            animationTime={`${100 / animationTime}s`}
          >
            {children}
          </StyledModal>
          <Overlay />
        </>,
          document.body
        )
      : null;
  }
}

Modal.defaultProps = {
  isOpen: false,
  animationType: "show"
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  animationType: PropTypes.string,
  animationTime: PropTypes.number,
  children: PropTypes.object
};

export default Modal;
