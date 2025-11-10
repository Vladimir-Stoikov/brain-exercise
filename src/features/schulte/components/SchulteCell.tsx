import React from 'react';
import ButtonCellSt from '../styled-components/ButtonCellSt.styled';

interface SchulteCellProp {
  value: number;
  onClick: (value: number) => void;
}

function generateLightColor() {
  const minLight = 150;

  const r = Math.floor(Math.random() * (255 - minLight + 1) + minLight);
  const g = Math.floor(Math.random() * (255 - minLight + 1) + minLight);
  const b = Math.floor(Math.random() * (255 - minLight + 1) + minLight);

  return `rgb(${r} ${g} ${b})`;
}

export default function SchulteCell({ value, onClick }: SchulteCellProp) {
  const randColor = generateLightColor();

  return (
    <ButtonCellSt onClick={() => onClick(value)} $backColor={randColor}>
      {value}
    </ButtonCellSt>
  );
}
