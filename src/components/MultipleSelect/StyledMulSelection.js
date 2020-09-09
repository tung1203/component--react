
import styled from "styled-components";

const WrapMulSelection = styled.div`
  border: 1px solid;
  width: 300px;
`;
const StyledInputMulSelection = styled.input`
  border: none;
  width: 100%;
  outline: none;
`;
const StyledTags = styled.div``;
const StyledTag = styled.span`
  margin-right: 3px;
  background-color: #eee;
  padding: 10px;
  display: inline-block;
  margin-bottom: 2px;
  position: relative;
`;
const StyledRemoveTag = styled.span`
  position: absolute;
  top: -2px;
  right: 3px;
  font-weight: bold;
  cursor: pointer;
`;

export {
    WrapMulSelection,
    StyledInputMulSelection,
    StyledTags,
    StyledTag,
    StyledRemoveTag
};
