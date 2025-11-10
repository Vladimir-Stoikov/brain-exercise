import styled from "styled-components";

const ButtonCellSt = styled.button<{ $backColor?: string }>`
background-color: ${props => props.$backColor || 'white'};
/* background-color: red; */
`

export default ButtonCellSt;