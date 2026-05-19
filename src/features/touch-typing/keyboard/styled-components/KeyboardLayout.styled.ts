import styled from 'styled-components';

export const KeyboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 32px;
  padding: 24px;

  width: fit-content;

  border-radius: 24px;

  background: linear-gradient(
    180deg,
    rgba(26, 61, 100, 0.96) 0%,
    rgba(12, 43, 78, 0.96) 100%
  );

  border: 1px solid rgba(64, 224, 208, 0.12);

  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);

  backdrop-filter: blur(6px);
`;

export const KeyboardRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;