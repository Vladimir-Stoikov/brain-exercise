import React, { useEffect, useMemo, useState } from 'react';
import SchulteCell from './SchulteCell';
import SectionGridSt from '../styled-components/SectionGridSt.styled';
import { generateSchulteGrid } from '../utils/generateSchulteGrid';
import type { SchulteValue } from '../utils/schulteTypes';
import SchulteFinished from './SchulteFinished';

interface SchulteGridProps {
  grid: number[];
  onRestart: () => void;
}

export default function SchulteGrid({ grid, onRestart }: SchulteGridProps) {
  const [counter, setCounter] = useState<number>(1);
  const [isFinished, setIsFinished] = useState(false);
  const shuffledGrid = useMemo(() => generateSchulteGrid(grid), [grid]);
  const size = Math.sqrt(shuffledGrid.length);
  const [time, setTime] = useState(0);
  const [finalTime, setFinalTime] = useState<number>(0);
  const [errors, setErrors] = useState<number>(0);

  useEffect(() => {
    if (isFinished) return;

    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isFinished]);

  function checkClick(value: SchulteValue) {
    if (value === counter) {
      if (counter === grid.length) {
        setIsFinished(true);
        setFinalTime(time);
      }

      setCounter(prev => prev + 1);
    } else {
      setErrors(prev => prev + 1);
    }

    return value === counter;
  }

  return (
    <>
      {!isFinished ? (
        <SectionGridSt $size={size}>
          {shuffledGrid.map((cell, id) => {
            const isCompleted = typeof cell.value === 'number' && cell.value < counter;
            return <SchulteCell key={id} value={cell.value} onClick={value => checkClick(value)} color={isCompleted ? 'white' : cell.color} />;
          })}
        </SectionGridSt>
      ) : (
        <SchulteFinished time={finalTime} errors={errors} onRestart={onRestart} />
      )}
    </>
  );
}
