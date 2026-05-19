import styled from 'styled-components';

export const TypingText = styled.p`
  width: 100%;
  max-width: 900px;

  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0.05em;

  padding: 1rem;

  border-radius: 0.5rem;

  background-color: var(--background-color-dark);

  overflow-wrap: break-word;
  word-break: break-word;

  white-space: pre-wrap;
`;