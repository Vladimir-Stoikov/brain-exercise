import React from 'react';
import SchulteCell from './SchulteCell';
import SectionGridSt from '../styled-components/SectionGridSt.styled';

interface SchulteGridProps {
  grid: number[];
}

const shuffle = (arr: number[]) => {
  const basedArr = [...arr];
  const resultArr: number[] = [];
  for (let i = 0; i < 49; i++) {
    resultArr.push(basedArr.splice(Math.random() * basedArr.length, 1)[0]);
  }
  return resultArr;
};

export default function SchulteGrid({ grid }: SchulteGridProps) {
  const shuffledGrid = shuffle(grid);
  const size = Math.sqrt(shuffledGrid.length);

  return (
    <SectionGridSt $size={size}>
      {shuffledGrid.map((cellNum, id) => {
        return <SchulteCell key={id} value={cellNum} onClick={() => console.log('click')} />;
      })}
    </SectionGridSt>
  );
}
