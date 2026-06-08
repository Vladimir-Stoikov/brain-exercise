import styled from 'styled-components';

export const FinishedContainerSt = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  
  width: 100%;
  max-width: 600px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  padding: 32px;
  
  background-color: var(--primary);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  text-align: center;
  box-sizing: border-box;
`;

export const FinishedTitleSt = styled.h2`
  font-family: 'Mulish', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--success-indicator-color);
  margin-bottom: 8px;
`;

export const StatsGroupSt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 320px;
`;

export const StatRowSt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--secondary);
  border-radius: 8px;
  font-size: 1.1rem;
  
  span:first-child {
    opacity: 0.8;
  }
  
  span:last-child {
    font-weight: bold;
    color: var(--text-color-light);
  }
`;

export const ActionButtonSt = styled.button`
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  padding: 12px 32px;
  margin-top: 16px;
  
  background-color: var(--success-indicator-color);
  color: var(--background-color-dark);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  
  &:hover {
    background-color: var(--secondary-light);
    color: var(--text-color-light);
  }
  
  &:active {
    transform: scale(0.98);
  }
`;
