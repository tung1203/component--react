
import styled from "styled-components";

const StyledToolTip = styled.div`
  position: absolute;
  display: inline-block;
  transform: translate(-50%, -50%);
  top: ${props => `${props.y}px` || "0"};
  left: ${props => `${props.x}px` || "0"};

  &:before {
    content: attr(data-text);
    width: auto;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 10px;
    border-radius: 6px;
    transform: translate(-50%, -50%);
`;
export default StyledToolTip;
