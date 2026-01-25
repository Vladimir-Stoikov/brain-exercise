import styled from 'styled-components';

export const StroopWordSt = styled.h2<{ $color: string }>`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;

  color: ${props => props.$color};
  letter-spacing: 0.15em;

  padding: 1rem;
  border-radius: 0.75rem;
  background-color: var(--background-color-dark);
`;
