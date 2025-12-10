import styled from "styled-components";


const ButtonSt = styled.button`
padding: 0.5rem 0.2rem;
margin: 0.2rem;
height: auto;
width: auto;
background-color: var(--secondary);
color: white;
border-radius: 0.5rem;
border: solid 0.3rem white;
&:hover {
  background-color: var(--secondary-light);
}
&:active { 
  transform: scale(1.05);
}

&:disabled {
  background-color: gray;
  cursor: not-allowed;
  opacity: 0.5;
  transform: none;
  }

&:disabled:hover,
&:disabled:active {
  background-color: gray;
  transform: none;
  }
`

export default ButtonSt