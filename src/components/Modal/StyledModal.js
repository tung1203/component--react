import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #000;
  z-index: 9999;
  opacity: 0.5;
  display: block;
`;
const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  z-index: 99999;
  max-width: 500px;
  margin: 0 auto;
  visibility: hidden;
  opacity: 0;

  &.fadeup {
    animation-name: fadeUp;
    animation-duration: ${props => props.animationTime || ".3s"};
    animation-fill-mode: forwards;
  }
  &.fadeup-blur {
    animation-name: fadeUp-blur;
    animation-duration: ${props => props.animationTime || ".3s"};
    animation-fill-mode: forwards;
  }
  @keyframes fadeUp {
    from {
      transform: translate(-50%, -60%);
    }
    to {
      visibility: visible;
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  @keyframes fadeUp-blur {
    from {
      visibility: visible;
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    to {
      visibility: hidden;
      opacity: 0;
      transform: translate(-50%, -60%);
    }
  }
`;
export {
    Overlay, StyledModal
};
