import styled from 'styled-components';

export const DifficultyWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

export const DifficultyButton = styled.button<{ $active: boolean }>`
  padding: 6px 14px;
  border-radius: 999px;
  border: none;

  font-size: 0.9rem;
  cursor: pointer;

  background-color: ${({ $active }) =>
    $active ? 'var(--secondary-light)' : 'transparent'};

  color: var(--text-color-light);

  outline: 1px solid var(--secondary-light);

  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ $active }) =>
      $active ? 'var(--secondary-light)' : 'var(--secondary)'};
  }
`;
