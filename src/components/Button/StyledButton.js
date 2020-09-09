import styled, { css } from "styled-components";

const StyledButton = styled.div`
font-size: ${props => props.theme.fontSize};
padding: 1rem;
border-radius: 10px;
display: inline-block;
cursor: pointer;
background: #eee;

${props => {
  switch (props.type) {
    case "primary":
      return css`
        background-color: ${props => props.theme.colorPrimary};
        color: #fff;
        font-weight: 500;
      `;
    case "secondary":
      return css`
        background-color: ${props => props.theme.colorSecondary};
        color: #fff;
        font-weight: 500;
      `;
    default:
      return null;
  }
}}
${props => {
  switch (props.size) {
    case "xl":
      return css`
        font-size: 30px;
      `;
    case "m":
      return css`
        font-size: 20px;
      `;
    case "s":
      return css`
        font-size: 10px;
      `;
    default:
      return null;
  }
}}
`;
export default StyledButton;
