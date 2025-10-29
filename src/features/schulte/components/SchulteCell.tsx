import React from 'react';
import ButtonCellSt from '../styled-components/ButtonCellSt.styled';

interface SchulteCellProp {
  value: number;
  onClick: (value: number) => void;
}

export default function SchulteCell({ value, onClick }: SchulteCellProp) {
  return <ButtonCellSt onClick={() => onClick(value)}>{value}</ButtonCellSt>;
}
