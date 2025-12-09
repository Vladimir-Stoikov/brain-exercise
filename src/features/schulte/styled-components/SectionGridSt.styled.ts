import styled from "styled-components"


const SectionGridSt = styled.section<{ $size?: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.$size || 7}, 1fr);
  grid-template-rows: repeat(${props => props.$size || 7}, 1fr);
  aspect-ratio: 1 / 1;
  max-width: 600px;
  margin: 0 auto;
`;

export default SectionGridSt