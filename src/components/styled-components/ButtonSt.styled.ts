import styled from "styled-components";


const ButtonSt = styled.button`
padding: 0.5rem 0.4rem;
margin: 0.2rem;
height: auto;
width: auto;
background-color: var(--secondary);
color: white;
border-radius: 0.4rem;
border: solid 0.15rem white;
box-shadow: 5px 5px 5px rgb(0 0 0 / 0.15);
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