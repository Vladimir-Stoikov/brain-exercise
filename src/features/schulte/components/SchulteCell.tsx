import React, { useMemo } from 'react';
import ButtonCellSt from '../styled-components/ButtonCellSt.styled';

type ValueType = number | '👁️';

interface SchulteCellProp {
  value: ValueType;
  onClick: (value: ValueType) => void;
  currentCounter: number;
}

function generateLightColor() {
  const minLight = 150;

  const r = Math.floor(Math.random() * (255 - minLight + 1) + minLight);
  const g = Math.floor(Math.random() * (255 - minLight + 1) + minLight);
  const b = Math.floor(Math.random() * (255 - minLight + 1) + minLight);

  return `rgb(${r} ${g} ${b})`;
}

export default function SchulteCell({ value, onClick, currentCounter }: SchulteCellProp) {
  const randColor = useMemo(() => generateLightColor(), [value]);

  const isCompleted = typeof value === 'number' && value < currentCounter;
  const cellColor = isCompleted ? 'white' : randColor;

  return (
    <ButtonCellSt onClick={() => onClick(value)} $backColor={cellColor}>
      {value}
    </ButtonCellSt>
  );
}

// useMemo(() => generateLightColor(), [value]);
