import React, { Component } from "react";
import Button from "./components/Button";
import Switch from "./components/Switch";
import SelectionSearch from "./components/SelectionSearch";
import List from "./components/List";
import Tooltip from "./components/Tooltip";
import Modal from "././components/Modal/";
// import Controller from "./components/Tooltip/Controller";
// import Select from "./components/Tooltip/Select";
import MutipleSelect from "./components/MultipleSelect";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      items: [
        { id: 1, content: "viet nam" },
        { id: 2, content: "trung quoc" },
        { id: 3, content: "my" },
        { id: 4, content: "anh" },
      ],
      selectedItems: [],
    };
  }
  toogleModal = () => {
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  };
  handleChangeSelect = (selectedItems) => {
    this.setState({ selectedItems });
  };
  render() {
    const { items, selectedItems } = this.state;
    return (
      <>
        {/* <Tooltip title="hihi" place="right">
          <Button className="btn btn--primary" text="Button" />
        </Tooltip>
        <Tooltip title="hihi" place="bottom">
          <Switch />
        </Tooltip>
        <Tooltip title="hihi" place="left">
          <SelectionSearch>{(data) => <List data={data} />}</SelectionSearch>
        </Tooltip> */}
        {/* <Controller>
          <Select>
            <li>List element-2</li>
          </Select>
          <Tooltip />
        </Controller> */}
        {/* <Button
          className="btn btn--primary"
          onClick={this.toogleModal}
          text="Open modal"
        />
        <Modal isOpen={this.state.isOpen} toggle={this.toogleModal} /> */}
        <MutipleSelect
          items={items}
          selectedItems={selectedItems}
          onChange={this.handleChangeSelect}
        >
          {(dataSelected, currentIdClick) => (
            <List data={dataSelected} currentIdClick={currentIdClick} />
          )}
        </MutipleSelect>
      </>
    );
  }
}