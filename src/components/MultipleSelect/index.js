import React, { Component } from "react";
import styled from "styled-components";

const WrapMulSelection = styled.div`
  border: 1px solid;
  width: 300px;
`;
const InputMulSelection = styled.input`
  border: none;
  width: 100%;
  outline: none;
`;
const Tags = styled.div``;
const Tag = styled.span`
  margin-right: 3px;
  background-color: #eee;
  padding: 10px;
  display: inline-block;
  margin-bottom: 2px;
  position: relative;
`;
const RemoveTag = styled.span`
  position: absolute;
  top: -2px;
  right: 3px;
  font-weight: bold;
  cursor: pointer;
`;

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      isOpen: false,
      itemsAvailable: [],
    };
    this.wrapRef = React.createRef();
  }
  regexSearch = (child, value) => {
    const condition = new RegExp(value, "i");
    return condition.test(child.content);
  };
  handleSearch = (e) => {
    const result = this.props.items.filter((child) =>
      this.regexSearch(child, e.target.value)
    );
    this.setState({
      ...this.state,
      isOpen: true,
      query: e.target.value,
      itemsAvailable: result,
    });
  };
  handleClick = () => {
    this.setState({ ...this.state, isOpen: true });
  };

  currentIdClick = (id) => {
    const currentItem = this.props.items.filter((item) => item.id === id);
    const newItemsSelected = this.props.selectedItems;
    newItemsSelected.push(...currentItem);
    this.props.onChange(newItemsSelected);
  };

  _renderTag = (item) => {
    return (
      <Tag key={item.id}>
        <RemoveTag
          onClick={() => {
            this._removeTag(item.id);
          }}
        >
          x
        </RemoveTag>
        {item.content}
      </Tag>
    );
  };
  _removeTag = (id) => {
    const currentItems = this.props.selectedItems.filter(
      (item) => item.id !== id
    );
    this.props.onChange(currentItems);
  };

  handleClickOutside(event) {
    if (this.wrapRef && !this.wrapRef.current.contains(event.target)) {
      this.setState({ ...this.state, isOpen: false });
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside.bind(this));
    this.setState({ ...this.state, itemsAvailable: this.props.items });
  }

  render() {
    const { items, children, selectedItems } = this.props;
    let { itemsAvailable } = this.state;
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < selectedItems.length; j++) {
        if (items[i].id === selectedItems[j].id) {
          itemsAvailable = itemsAvailable.filter((item) => item.id !== i + 1);
        }
      }
    }
    const { query, isOpen } = this.state;
    return (
      <WrapMulSelection ref={this.wrapRef}>
        <Tags>{selectedItems.map(this._renderTag)}</Tags>
        <InputMulSelection
          value={query}
          onChange={this.handleSearch}
          onClick={this.handleClick}
        />

        {isOpen && children(itemsAvailable, this.currentIdClick)}
      </WrapMulSelection>
    );
  }
}
