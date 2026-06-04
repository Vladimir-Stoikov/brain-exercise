import React, { useMemo, useState } from 'react';
import SchulteCell from './SchulteCell';
import SectionGridSt from '../styled-components/SectionGridSt.styled';
import { generateSchulteGrid } from '../utils/generateSchulteGrid';
import type { SchulteValue } from '../utils/schulteTypes';

interface SchulteGridProps {
  grid: number[];
}

export default function SchulteGrid({ grid }: SchulteGridProps) {
  const [counter, setCounter] = useState<number>(1);
  const shuffledGrid = useMemo(() => generateSchulteGrid(grid), [grid]);
  const size = Math.sqrt(shuffledGrid.length);

  function checkClick(value: SchulteValue) {
    if (value === counter) {
      console.log('good', counter);
      setCounter(prev => prev + 1);
    } else {
      console.log('failed');
    }
    if (counter === grid.length) {
      console.log('congrads');
    }
  }

  return (
    <SectionGridSt $size={size}>
      {shuffledGrid.map((cell, id) => {
        const isCompleted = typeof cell.value === 'number' && cell.value < counter;

        return <SchulteCell key={id} value={cell.value} onClick={value => checkClick(value)} color={isCompleted ? 'white' : cell.color} />;
      })}
    </SectionGridSt>
  );
}
