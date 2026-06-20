import React from 'react';
import { formatSchulteTime } from '../utils/formatSchulteTime'; // Adjust path accordingly
import { ActionButtonSt, FinishedContainerSt, FinishedTitleSt, StatRowSt, StatsGroupSt } from '../styled-components/FinishedContainerSt';

interface SchulteFinishedProps {
  time: number; 
  errors: number; 
  onRestart: () => void;
}

export default function SchulteFinished({ time, errors, onRestart }: SchulteFinishedProps) {
  return (
    <FinishedContainerSt>
      <div>
        <FinishedTitleSt>Table Completed! 🎉</FinishedTitleSt>
        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Excellent focus performance</p>
      </div>

      <StatsGroupSt>
        <StatRowSt>
          <span>Completion Time</span>
          <span>{formatSchulteTime(time)}</span>
        </StatRowSt>

        <StatRowSt>
          <span>Errors Made</span>
          <span style={{ color: errors > 0 ? 'var(--error-indicator-color)' : 'var(--success-indicator-color)' }}>{errors}</span>
        </StatRowSt>
      </StatsGroupSt>

      <ActionButtonSt onClick={onRestart}>Play Again</ActionButtonSt>
    </FinishedContainerSt>
  );
}
