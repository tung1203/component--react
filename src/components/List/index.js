/* eslint-disable react/jsx-closing-tag-location */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledList = styled.ul`
  width: 100%;
  position: absolute;
`;
const StyledLi = styled.li`
  cursor: pointer;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  text-transform: capitalize;
`;

class List extends Component {
  _renderData = child => {
    const { currentIdClick } = this.props;
    return <StyledLi
      key={child.id}
      onClick={() => {
          currentIdClick(child.id);
        }}
    >
      {child.content}
    </StyledLi>;
  };

  render() {
    const { data } = this.props;
    return <StyledList>{data.length > 0 && data.map(this._renderData)}</StyledList>;
  }
}

List.propTypes = {
  data: PropTypes.array,
  currentIdClick: PropTypes.func
};

export default List;
