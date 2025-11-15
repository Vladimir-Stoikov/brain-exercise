import React, { useMemo, useState } from 'react';
import SchulteCell from './SchulteCell';
import SectionGridSt from '../styled-components/SectionGridSt.styled';

interface SchulteGridProps {
  grid: number[];
}

type ResultArrType = Array<number | '👁️'>;
type ValueType = number | '👁️';

const shuffle = (arr: number[]) => {
  const basedArr = [...arr];
  const resultArr: ResultArrType = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      resultArr.push(basedArr.splice(Math.floor(Math.random() * basedArr.length), 1)[0]);
    } else {
      const centralIndex = Math.floor(resultArr.length / 2);
      const centralElement = resultArr[centralIndex];
      resultArr.splice(centralIndex, 1);
      resultArr.splice(centralIndex, 0, '👁️');
      resultArr.push(centralElement);
    }
  }
  return resultArr;
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
      console.log('end');
    }
  }

  return (
    <SectionGridSt $size={size}>
      {shuffledGrid.map((cellNum, id) => {
        return <SchulteCell key={id} value={cellNum} onClick={value => checkClick(value)} />;
      })}
    </SectionGridSt>
  );
}
