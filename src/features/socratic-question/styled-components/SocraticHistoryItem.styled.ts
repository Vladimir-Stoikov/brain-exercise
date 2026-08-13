import styled from 'styled-components';

export const SocraticHistoryItemSt = styled.div`
  padding: 12px 16px;
  margin-bottom: 12px;

  border: 1px solid var(--secondary);
  border-radius: 8px;
  background-color: var(--primary);

  p {
    margin: 0;

    & + p {
      margin-top: 8px;
    }
  }

  strong {
    margin-right: 6px;
  }
`;