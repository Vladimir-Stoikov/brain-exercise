import styled from 'styled-components';

export const FeedbackText = styled.p<{ $type: 'correct' | 'wrong' }>`
  font-weight: 600;
  text-align: center;

  color: ${props =>
    props.$type === 'correct'
      ? 'var(--success-indicator-color)'
      : 'var(--error-indicator-color)'};
`;
