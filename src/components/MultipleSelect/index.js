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
const StyledTags = styled.div``;
const StyledTag = styled.span`
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
      itemsSelected: [],
      itemsAvailable: [],
    };
    this.wrapRef = React.createRef();
  }
  regexSearch = (child, value) => {
    const condition = new RegExp(value, "i");
    return condition.test(child.content);
  };
  handleSearch = (e) => {
    const { items } = this.props;
    const { itemsSelected } = this.state;
    const itemsAvailable = items.filter((item) => {
      return !itemsSelected.map((item) => item.id).includes(item.id);
    });
    const result = itemsAvailable.filter((child) =>
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
    this.setState(
      {
        ...this.state,
        itemsSelected: [...this.state.itemsSelected, ...currentItem],
      },
      () => {
        const { items } = this.props;
        const { itemsSelected } = this.state;
        const itemsAvailable = items.filter((item) => {
          return !itemsSelected.map((item) => item.id).includes(item.id);
        });
        this.setState({ itemsAvailable });
        this.props.onChange(itemsSelected);
      }
    );
  };

  _renderTag = (item) => {
    return (
      <StyledTag key={item.id}>
        <RemoveTag
          onClick={() => {
            this._removeTag(item.id);
          }}
        >
          x
        </RemoveTag>
        {item.content}
      </StyledTag>
    );
  };
  _removeTag = (id) => {
    const itemsSelected = this.state.itemsSelected.filter(
      (item) => item.id !== id
    );
    this.setState(
      {
        ...this.state,
        itemsSelected: itemsSelected,
      },
      () => {
        const { items } = this.props;
        const { itemsSelected } = this.state;
        const itemsAvailable = items.filter((item) => {
          return !itemsSelected.map((item) => item.id).includes(item.id);
        });
        this.setState({ itemsAvailable });
        this.props.onChange(itemsSelected);
      }
    );
  };

  handleClickOutside(event) {
    if (this.wrapRef && !this.wrapRef.current.contains(event.target)) {
      this.setState({ ...this.state, isOpen: false });
    }
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside.bind(this));

    const { items } = this.props;
    const { itemsSelected } = this.state;
    const itemsAvailable = items.filter((item) => {
      return !itemsSelected.map((item) => item.id).includes(item.id);
    });
    this.setState({
      ...this.state,
      itemsAvailable,
    });
  }

  render() {
    const { children } = this.props;
    const { query, isOpen, itemsSelected, itemsAvailable } = this.state;

    return (
      <WrapMulSelection ref={this.wrapRef}>
        <StyledTags>
          {itemsSelected && itemsSelected.map(this._renderTag)}
        </StyledTags>
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
