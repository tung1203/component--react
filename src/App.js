import React, { Component } from "react";
import Button from "./components/Button";
import Switch from "./components/Switch";
import SelectionSearch from "./components/SelectionSearch";
import List from "./components/List";
import Tooltip from "./components/Tooltip";
import Modal from "././components/Modal/";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  toogleModal = () => {
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <>
        <Tooltip title="hihi" place="right">
          <Button className="btn btn--primary" text="Button" />
        </Tooltip>
        <Tooltip title="hihi" place="bottom">
          <Switch />
        </Tooltip>
        <Tooltip title="hihi" place="left">
          <SelectionSearch>{(data) => <List data={data} />}</SelectionSearch>
        </Tooltip>
        <Button
          className="btn btn--primary"
          onClick={this.toogleModal}
          text="Open modal"
        />
        <Modal isOpen={this.state.isOpen} toggle={this.toogleModal} />
      </>
    );
  }
}
