import React from "react";
function delayUnmounting(Component) {
  return class extends React.Component {
    state = {
      shouldRender: this.props.isOpen,
    };

    componentDidUpdate(prevProps) {
      if (prevProps.isOpen && !this.props.isOpen) {
        setTimeout(() => this.setState({ shouldRender: false }), 3000);
      } else if (!prevProps.isOpen && this.props.isOpen) {
        this.setState({ shouldRender: true });
      }
    }

    render() {
      return this.state.shouldRender ? <Component {...this.props} /> : null;
    }
  };
}
export default delayUnmounting;
