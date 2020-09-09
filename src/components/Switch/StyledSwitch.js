
import styled, { css } from "styled-components";

const StyledSwitch = styled.div`
background: #eee;
width: 60px;
height: 34px;
position: relative;
cursor: pointer;
transition: all 0.4s;

&.trigger {
  background: ${props => props.theme.colorPrimary};

  & .slider {
    transform: translateX(26px);
  }
}

& .slider {
  background: $color-white;
  border-radius: 50%;
  position: absolute;
  height: 26px;
  width: 26px;
  left: 4px;
  right: auto;
  bottom: 4px;
  background-color: white;
  transition: all 0.4s;
}
${props => {
  switch (props.type) {
    case "round":
      return css`
        border-radius: 34px;
      `;
    default:
      return null;
  }
}}
`;
export default StyledSwitch;
