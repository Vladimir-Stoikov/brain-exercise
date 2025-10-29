import styled from "styled-components"


const SectionGridSt = styled.section<{ $size?: number }>`
  grid-template-columns: repeat(${props => props.$size || 49}, minmax(0, 1fr));
  width: min(90vw, 400px);
`;

export default SectionGridSt