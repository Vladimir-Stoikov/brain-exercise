import styled from 'styled-components';

export const StroopButton = styled.button<{ $color: string }>`
  margin: 10px 3px;
  padding: 0.75rem;
  font-weight: 600;
  border-radius: 0.5rem;

  background-color: ${props => props.$color};
  color: #000;

  border: none;
  cursor: pointer;

  transition: transform 0.1s ease, opacity 0.1s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
  }
`;
