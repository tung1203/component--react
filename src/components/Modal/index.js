import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "../Button";

export default class index extends Component {
  render() {
    return this.props.isOpen
      ? ReactDOM.createPortal(
          <>
            <div className={`modal ${this.props.isOpen ? "show" : "fade"}`}>
              <div className="modal__content">
                <div className="modal__header">
                  <h5 className="modal__title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <Button
                    className="btn"
                    onClick={() => {
                      this.props.toggle();
                    }}
                    text="&times;"
                    style={{ marginRight: .5 + "rem" }}
                  />
                </div>
                <div className="modal__body">...</div>
                <div className="modal__footer">
                  <Button
                    className="btn"
                    onClick={() => {
                      this.props.toggle();
                    }}
                    text="Close"
                    style={{ marginRight: 1 + "rem" }}
                  />{" "}
                  <Button
                    className="btn btn--primary"
                    onClick={() => {
                      this.props.toggle();
                    }}
                    text="Save changes"
                  />
                </div>
              </div>
            </div>
            <div
              className={`overlay ${this.props.isOpen ? "show" : "fade"}`}
            ></div>
          </>,
          document.body
        )
      : null;
  }
}
