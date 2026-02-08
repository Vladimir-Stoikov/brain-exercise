import styled from 'styled-components';

export const TimerBar = styled.div<{ $duration: number }>`
  width: 100%;
  height: 6px;
  background-color: var(--error-indicator-color);
  margin-bottom: 1rem;

  animation: shrink linear forwards;
  animation-duration: ${({ $duration }) => $duration}ms;

  @keyframes shrink {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
`;
