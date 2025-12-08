import React from 'react';
import ButtonCellSt from '../styled-components/ButtonCellSt.styled';

type ValueType = number | '👁️';

interface SchulteCellProp {
  value: ValueType;
  onClick: (value: ValueType) => void;
  color: string;
}

export default function SchulteCell({ value, onClick, color }: SchulteCellProp) {
  return (
    <ButtonCellSt onClick={() => onClick(value)} $backColor={color}>
      {value}
    </ButtonCellSt>
  );
}
