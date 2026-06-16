import React, { useEffect, useState } from 'react';
import ButtonCellSt from '../styled-components/ButtonCellSt.styled';
import type { SchulteValue } from '../utils/schulteTypes';

interface SchulteCellProp {
  value: SchulteValue;
  onClick: (value: SchulteValue) => boolean;
  color: string;
}

export default function SchulteCell({ value, onClick, color }: SchulteCellProp) {
  const [status, setStatus] = useState<'correct' | 'error' | 'idle'>('idle');
  const [animationKey, setAnimationKey] = useState(0);

  const handleClick = () => {
    const isCorrect = onClick(value);
    setStatus(isCorrect ? 'correct' : 'error');
    setAnimationKey(prev => prev + 1);
  };

  useEffect(() => {
    if (status === 'idle') return;
    const timer = setTimeout(() => setStatus('idle'), 400);
    return () => clearTimeout(timer);
  }, [status, animationKey]);

  return (
    <ButtonCellSt key={animationKey} onClick={handleClick} $backColor={color} $status={status}>
      {value}
    </ButtonCellSt>
  );
}
