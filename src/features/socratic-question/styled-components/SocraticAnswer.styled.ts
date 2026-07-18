import styled from 'styled-components';

export const SocraticAnswer = styled.textarea`
  width: 100%;
  min-height: 180px;

  resize: vertical;

  padding: 16px;

  font: inherit;

  border-radius: 12px;
  border: 1px solid var(--secondary-light);

  background: var(--primary);
  color: var(--text-color-light);

  &:focus {
    outline: none;
    border-color: #40e0d0;
  }
`;