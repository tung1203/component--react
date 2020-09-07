import React, { Component } from "react";
import styled, { css } from "styled-components";
import withTheme from "../../withTheme";
import Loader from "../Loader";

const ButtonComp = styled.div`
  font-size: ${(props) => props.theme.fontSize};
  padding: 1rem;
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
  background: #eee;

  ${(props) => {
    switch (props.type) {
      case "primary":
        return css`
          background-color: ${(props) => props.theme.colorPrimary};
          color: #fff;
          font-weight: 500;
        `;
      case "secondary":
        return css`
          background-color: ${(props) => props.theme.colorSecondary};
          color: #fff;
          font-weight: 500;
        `;
      default:
        return;
    }
  }}
  ${(props) => {
    switch (props.size) {
      case "xl":
        return css`
          font-size: 30px;
        `;
      case "m":
        return css`
          font-size: 20px;
        `;
      case "s":
        return css`
          font-size: 10px;
        `;
      default:
        return;
    }
  }}
`;

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
      isLoading,
    } = this.props;
    return (
      <ButtonComp
        className={className}
        type={type}
        style={style}
        onClick={onClick}
        theme={theme}
        size={size}
      >
        {isLoading ? <Loader /> : children}
      </ButtonComp>
    );
  }
}
export default withTheme(Button);
