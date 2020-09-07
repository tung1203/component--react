import React, { Component } from "react";
import Button from "./components/Button";
import Switch from "./components/Switch";
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
      switchActive: false,
    };
  }
  toogleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleChangeSelect = (selectedItems) => {
    this.setState({ selectedItems });
  };
  toggleSwitchActive = () => {
    this.setState({ switchActive: !this.state.switchActive });
  };
  render() {
    const { items, switchActive } = this.state;
    return (
      <>
        <Button text="" type="primary" size="m" isLoading={true}>
          Button
        </Button>
        <Button type="primary" size="m" isLoading={false}>
          Button
        </Button>

        <Switch
          toggleSwitchActive={this.toggleSwitchActive}
          isActive={switchActive}
          color="primary"
          type="round"
        />
        <Button onClick={this.toogleModal}>Open modal</Button>
        <Modal
          isOpen={this.state.isOpen}
          animationType="fadeup"
          animationTime={300}
        >
          <div
            style={{
              backgroundColor: "#fff",
              maxWidth: 500,
              padding: 20,
              margin: 10,
            }}
          >
            <Button type="button" onClick={this.toogleModal}>
              Close
            </Button>
            <h3>Lorem</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Modal>
        <MutipleSelect items={items} onChange={this.handleChangeSelect}>
          {(dataSelected, currentIdClick) => (
            <List data={dataSelected} currentIdClick={currentIdClick} />
          )}
        </MutipleSelect>
        <Tooltip title="ok nguyen thanh tung" placement="top">
          <span>List element-2</span>
        </Tooltip>
        <Tooltip title="abc" placement="top">
          <span>List element-3</span>
        </Tooltip>
      </>
    );
  }
}
