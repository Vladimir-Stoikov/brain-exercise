import styled, { keyframes } from 'styled-components';

const shrink = keyframes`
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
`;

export const TimerBar = styled.div<{ $active: boolean }>`
  height: 6px;
  width: 100%;
  background: var(--secondary-light);
  transform-origin: left;
  animation: ${({ $active }) => ($active ? shrink : 'none')}
    3000ms linear forwards;

  border-radius: 4px;
  margin-bottom: 12px;
`;
