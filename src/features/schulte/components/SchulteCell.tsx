import React from 'react';

interface SchulteCellProp {
  value: number;
  onClick: (value: number) => void;
}

export default function SchulteCell({ value, onClick }: SchulteCellProp) {
  return <button onClick={() => onClick(value)}>{value}</button>;
}
