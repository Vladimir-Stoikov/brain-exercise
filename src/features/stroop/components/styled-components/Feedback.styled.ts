import styled, { keyframes, css } from 'styled-components';

const pop = keyframes`
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  75% { transform: translateX(-4px); }
  100% { transform: translateX(0); }
`;

export const FeedbackText = styled.p<{ $type: 'correct' | 'wrong' }>`
  font-weight: 600;
  text-align: center;
  min-height: 1.5rem; /* ⬅️ важно, чтобы не прыгал layout */

  color: ${props =>
    props.$type === 'correct'
      ? 'var(--success-indicator-color)'
      : 'var(--error-indicator-color)'};

  animation: ${props =>
    props.$type === 'correct'
      ? css`${pop} 0.2s ease-out`
      : css`${shake} 0.25s ease-out`};
`;
