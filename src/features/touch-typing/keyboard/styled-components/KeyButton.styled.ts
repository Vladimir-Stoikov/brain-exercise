import styled, { css } from 'styled-components';

type KeyButtonProps = {
  $width?: 'medium' | 'large' | 'xlarge' | 'space';
  $anchor?: boolean;
};

export const KeyButton = styled.div<KeyButtonProps>`
  height: 52px;
  min-width: 52px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--primary);
  border: 2px solid var(--secondary-light);

  color: var(--text-color-light);

  font-size: 0.95rem;
  user-select: none;

  transition: 0.15s ease;

  ${({ $width }) =>
    $width === 'medium' &&
    css`
      min-width: 80px;
    `}

  ${({ $width }) =>
    $width === 'large' &&
    css`
      min-width: 110px;
    `}

  ${({ $width }) =>
    $width === 'xlarge' &&
    css`
      min-width: 140px;
    `}

  ${({ $width }) =>
    $width === 'space' &&
    css`
      width: 420px;
    `}

  ${({ $anchor }) =>
    $anchor &&
    css`
      border-color: #40e0d0;
      box-shadow: 0 0 8px rgba(64, 224, 208, 0.6);
    `}
`;