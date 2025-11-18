import styled from "styled-components";

const UlSt = styled.ul`
margin: 1rem 0;
padding: 1rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid 0.3rem white;
border-radius: 1rem;
list-style-type: none;
font-size: 1.3rem;
& li a {
  color: var(--text-color-light);
  text-decoration: none;
}
`

export default UlSt