import React, { Component } from "react";
import PropTypes from "prop-types";
import withTheme from "../../withTheme";
import Loader from "../Loader";
import StyledButton from "./StyledButton";

class Button extends Component {
  render() {
    const {
      className,
      style,
      onClick,
      type,
      theme,
      size,
      children,
      isLoading
    } = this.props;
    return (
      <StyledButton
        className={className}
        type={type}
        style={style}
        onClick={onClick}
        theme={theme}
        size={size}
      >
        {isLoading ? <Loader /> : children}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  theme: PropTypes.object,
  size: PropTypes.string,
  children: PropTypes.array,
  isLoading: PropTypes.bool
};

// eslint-disable-next-line react/jsx-props-no-spreading
// export default withTheme(React.forwardRef((props, ref) => <Button innerRef={ref} {...props} />));
export default withTheme(Button);
