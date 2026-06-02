import React, { useMemo, useState } from 'react';
import SchulteCell from './SchulteCell';
import SectionGridSt from '../styled-components/SectionGridSt.styled';
import { generateLightColor } from '../../../utility/color';

interface SchulteGridProps {
  grid: number[];
}

type ValueType = number | '👁️';
type Cell = {
  value: ValueType;
  color: string;
};

const shuffle = (arr: number[]): Cell[] => {
  const basedArr = [...arr];
  const resultArr: ValueType[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      resultArr.push(basedArr.splice(Math.floor(Math.random() * basedArr.length), 1)[0]);
    } else {
      const centralIndex = Math.floor(arr.length / 2);

      resultArr.splice(centralIndex, 0, '👁️');

      resultArr.push(basedArr[0]);
    }
  }

  return resultArr.map(value => ({
    value,
    color: generateLightColor(),
  }));
};

export default function SchulteGrid({ grid }: SchulteGridProps) {
  const [counter, setCounter] = useState<number>(1);
  const shuffledGrid = useMemo(() => shuffle(grid), [grid]);
  const size = Math.sqrt(shuffledGrid.length);

  function checkClick(value: ValueType) {
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
