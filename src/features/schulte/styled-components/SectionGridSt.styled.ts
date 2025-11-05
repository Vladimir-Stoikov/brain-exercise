import styled from "styled-components"


const SectionGridSt = styled.section<{ $size?: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.$size || 7}, 1fr);
  grid-template-rows: repeat(${props => props.$size || 7}, 1fr);
  width: 100%;
  height: 100%;
`;

export default SectionGridSt