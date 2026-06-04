import React from 'react';
import ButtonCellSt from '../styled-components/ButtonCellSt.styled';
import type { SchulteValue } from '../utils/schulteTypes';

interface SchulteCellProp {
  value: SchulteValue;
  onClick: (value: SchulteValue) => void;
  color: string;
}

export default function SchulteCell({ value, onClick, color }: SchulteCellProp) {
  return (
    <ButtonCellSt onClick={() => onClick(value)} $backColor={color}>
      {value}
    </ButtonCellSt>
  );
}
