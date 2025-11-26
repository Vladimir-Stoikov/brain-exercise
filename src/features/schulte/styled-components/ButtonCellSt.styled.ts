import styled from "styled-components";

const ButtonCellSt = styled.button.attrs<{ $backColor?: string }>(props => ({
  style: {
    backgroundColor: props.$backColor ?? 'white'
  }
}))`
  border: none;
  cursor: pointer;
`

export default ButtonCellSt;