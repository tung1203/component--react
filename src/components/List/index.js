import React, { Component } from "react";

export default class List extends Component {
  _mapData = (child) => (
    <li
      key={child.id}
      onClick={() => {
        this.props.currentIdClick(child.id);
      }}
    >
      {child.content}
    </li>
  );
  render() {
    const { data } = this.props;
    return <ul className="list">{data.length > 0 && data.map(this._mapData)}</ul>;
  }
}
