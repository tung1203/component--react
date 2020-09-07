import React, { Component } from "react";
import styled from "styled-components";
const List = styled.ul`
  width: 100%;
  position: absolute;
`;
const Li = styled.li`
  cursor: pointer;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  text-transform: capitalize;
`;

class index extends Component {
  _mapData = (child) => (
    <Li
      key={child.id}
      onClick={() => {
        this.props.currentIdClick(child.id);
      }}
    >
      {child.content}
    </Li>
  );
  render() {
    const { data } = this.props;
    return <List>{data.length > 0 && data.map(this._mapData)}</List>;
  }
}
export default index;
