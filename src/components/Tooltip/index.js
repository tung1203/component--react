/* eslint-disable no-return-assign */
import React, { Component } from "react"; import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Tooltip from "./Tooltip";

class index extends Component {
constructor(props) {
    super(props);
    this.state = {
        isShow: false,
        x: 0,
        y: 0
    };
}

componentDidMount() {
    // eslint-disable-next-line react/no-find-dom-node
    ReactDOM.findDOMNode(this.ref).addEventListener("mouseover", this._setPositionTooltip);
    // eslint-disable-next-line react/no-find-dom-node
    ReactDOM.findDOMNode(this.ref).addEventListener("mouseleave", this._removePositionTooltip);
}

_setPositionTooltip = evt => {
    const el = evt.currentTarget;

    if (el != null) {
        const { placement } = this.props;
        const rect = el.getBoundingClientRect();
        console.log(rect);
        if (placement === "top") {
            this.setState({
                isShow: true,
                x: rect.x + (rect.width / 2),
                y: rect.y - 10
            });
        }
    }
};

_removePositionTooltip = () => {
    this.setState({
        isShow: false
    });
};

render() {
    const { title, placement, children } = this.props;
    const { isShow, x, y } = this.state;
    return (
      <>
        {React.cloneElement(children, { ref: el => (this.ref = el) })}
        {isShow && <Tooltip title={title} placement={placement} x={x} y={y} />}
      </>
    );
}
}

index.propTypes = {
    title: PropTypes.string,
    placement: PropTypes.string,
    children: PropTypes.any

};

export default index;

