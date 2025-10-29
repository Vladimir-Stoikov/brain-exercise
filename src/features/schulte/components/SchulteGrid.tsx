import React from 'react';
import SchulteCell from './SchulteCell';
import SectionGridSt from '../styled-components/SectionGridSt.styled';

interface SchulteGridProps {
  grid: number[];
}

export default function SchulteGrid({ grid }: SchulteGridProps) {
  const size = Math.sqrt(grid.length);

  return (
    <SectionGridSt $size={size}>
      {grid.map(cellNum => {
        return <SchulteCell key={cellNum} value={cellNum} onClick={() => console.log('click')} />;
      })}
    </SectionGridSt>
  );
}
