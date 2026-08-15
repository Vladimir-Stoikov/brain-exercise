import styled from 'styled-components';

export const NotFoundWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  width: min(500px, 100%);
  padding: 3rem 2rem;

  background-color: var(--primary);
  border-radius: 1rem;

  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.3);

  text-align: center;
`;