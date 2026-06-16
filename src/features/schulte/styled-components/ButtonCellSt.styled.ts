import styled, { keyframes, css } from "styled-components";

const flashCorrect = keyframes`
  0% { background-color: var(--success-indicator-color); color: var(--text-color-light); transform: scale(0.95); }
  100% { background-color: white; color: var(--background-color-dark); transform: scale(1); }
`;

const flashError = keyframes`
  0% { background-color: var(--error-indicator-color); color: var(--text-color-light); transform: scale(0.95); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

interface ButtonCellProps {
  $backColor?: string;
  $status: 'correct' | 'error' | 'idle';
}

const ButtonCellSt = styled.button<ButtonCellProps>`

  background-color: ${props => props.$backColor ?? 'white'};
  color: var(--text-color-light);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  text-shadow: 0 1px 1px rgba(12, 43, 78, 1); 

  ${({ $status }) =>
    $status === 'correct' &&
    css`
      animation: ${flashCorrect} 0.35s ease-out forwards;
    `}

  ${({ $status }) =>
    $status === 'error' &&
    css`
      animation: ${flashError} 0.4s ease-in-out;
    `}
`;

export default ButtonCellSt;
