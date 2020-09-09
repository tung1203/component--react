/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

function delayUnmounting(Component) {
   class DelayUnmounting extends React.Component {
    constructor(props) {
      super(props);
      const { isOpen } = this.props;
      this.state = {
        shouldRender: isOpen
      };
    }

    componentDidUpdate(prevProps) {
      const { isOpen } = this.props;
      if (prevProps.isOpen && !isOpen) {
        setTimeout(() => this.setState({ shouldRender: false }), 3000);
      } else if (!prevProps.isOpen && isOpen) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ shouldRender: true });
      }
    }

    render() {
      const { shouldRender } = this.state;
      return shouldRender ? <Component {...this.props} /> : null;
    }
  }

  DelayUnmounting.propTypes = {
    isOpen: PropTypes.bool
  };

  return DelayUnmounting;
}

delayUnmounting.propTypes = {
  Component: PropTypes.element
};
export default delayUnmounting;
