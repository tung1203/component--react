/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from "react";

const withTheme = WrapedComponent => {
  const theme = {
    colorPrimary: "#616ae8",
    colorSecondary: "#20e5a7",
    fontSize: "1.6rem",
    font: "Poppins-Bold, sans-serif"
  };
  class HOC extends Component {
    render() {
      return <WrapedComponent {...this.props} theme={theme} />;
    }
  }
  return HOC;
};
export default withTheme;
