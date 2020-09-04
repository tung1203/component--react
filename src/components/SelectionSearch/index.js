import React, { Component } from "react";

const data = [
  { id: 1, country: "viet nam" },
  { id: 2, country: "trung quoc" },
  { id: 3, country: "my" },
  { id: 4, country: "anh" },
];
export default class SelectionSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFound: [],
      query: "",
    };
  }
  handleSearch = (e) => {
    const condition = new RegExp(e.target.value, "i");
    const result = data.filter(function (child) {
      return condition.test(child.country);
    });

    this.setState({ dataFound: result, query: e.target.value });
  };
  render() {
    return (
      <div className="selection-search">
        <input
          value={this.state.query}
          onChange={(e) => this.handleSearch(e)}
        />
        {this.props.children(this.state.dataFound)}
      </div>
    );
  }
}
