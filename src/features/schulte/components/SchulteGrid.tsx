import React from 'react';
import SchulteCell from './SchulteCell';
import SectionGridSt from '../styled-components/SectionGridSt.styled';

interface SchulteGridProps {
  grid: number[];
}

type ResultArrType = Array<number | '👁️'>;

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
