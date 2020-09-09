import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  WrapMulSelection,
  StyledInputMulSelection,
  StyledTags,
  StyledTag,
  StyledRemoveTag } from "./StyledMulSelection";

class MultipleSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      isOpen: false,
      itemsSelected: [],
      itemsAvailable: []
    };
    this.wrapRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside.bind(this));

    const itemsAvailable = this._findItemsAvailable();
    this.setState(prevState => ({
      ...prevState,
      itemsAvailable
    }));
  }

  handleSearch = e => {
    e.persist();
    const { items } = this.props;
    const { itemsSelected } = this.state;
    const itemsAvailable = items.filter(
      item => !itemsSelected.map(item => item.id).includes(item.id)
    );
    const result = itemsAvailable.filter(child => this.regexSearch(child, e.target.value));
    this.setState(prevState => ({
      ...prevState,
      isOpen: true,
      query: e.target.value,
      itemsAvailable: result
    }));
  };

  handleClick = () => {
    this.setState({ isOpen: true });
  };

  currentIdClick = id => {
    const { items, multiple } = this.props;
    const { itemsSelected } = this.state;
    if (multiple || itemsSelected.length < 1) {
      const currentItem = items.filter(item => item.id === id);
    this.setState(
      {
        itemsSelected: [...itemsSelected, ...currentItem]
      },
      () => {
        const { onChange } = this.props;
        const { itemsSelected } = this.state;
        const itemsAvailable = this._findItemsAvailable();
        this.setState({ itemsAvailable });
        onChange(itemsSelected);
      }
    );
    }
  };

  handleClickOutside(event) {
    if (this.wrapRef && !this.wrapRef.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }

  regexSearch = (child, value) => {
    const condition = new RegExp(value, "i");
    return condition.test(child.content);
  };

  _findItemsAvailable = () => {
    const { items } = this.props;
    const { itemsSelected } = this.state;
    return items.filter(
      item => !itemsSelected.map(item => item.id).includes(item.id)
    );
  };

  _renderTag = item => (
    <StyledTag key={item.id}>
      <StyledRemoveTag
        onClick={() => {
          this._removeTag(item.id);
        }}
      >
        x
      </StyledRemoveTag>
      {item.content}
    </StyledTag>
  );

  _removeTag = id => {
    const { itemsSelected } = this.state;
    const newItemsSelected = itemsSelected.filter(
      item => item.id !== id
    );
    this.setState(
      {
        itemsSelected: newItemsSelected
      },
      () => {
        const { onChange } = this.props;
        const itemsAvailable = this._findItemsAvailable();
        this.setState({ itemsAvailable });
        onChange(newItemsSelected);
      }
    );
  };

  render() {
    const { children } = this.props;
    const { query, isOpen, itemsSelected, itemsAvailable } = this.state;

    return (
      <WrapMulSelection ref={this.wrapRef}>
        <StyledTags>
          {itemsSelected && itemsSelected.map(this._renderTag)}
        </StyledTags>
        <StyledInputMulSelection
          value={query}
          onChange={this.handleSearch}
          onClick={this.handleClick}
        />

        {isOpen && children(itemsAvailable, this.currentIdClick)}
      </WrapMulSelection>
    );
  }
}

MultipleSelect.defaultProps = {
  multiple: false
};

MultipleSelect.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
  children: PropTypes.func,
  multiple: PropTypes.bool
};

export default MultipleSelect;
