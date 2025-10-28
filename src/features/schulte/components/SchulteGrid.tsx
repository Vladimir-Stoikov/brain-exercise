import React from 'react';
import SchulteCell from './SchulteCell';

interface SchulteGridProps {
  grid: number[];
}

export default function SchulteGrid({ grid }: SchulteGridProps) {
  const size = Math.sqrt(grid.length);

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
        width: 'min(90vw, 400px)',
      }}
    >
      {grid.map(cellNum => {
        return <SchulteCell key={cellNum} value={cellNum} onClick={() => console.log('click')} />;
      })}
    </div>
  );
}
