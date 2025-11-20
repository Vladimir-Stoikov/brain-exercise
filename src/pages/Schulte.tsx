import React, { useContext } from 'react';
import SchulteGrid from '../features/schulte/components/SchulteGrid';
import { DifficultyContext } from '../utility/DifficultyContext';

type DifficultyType = {
  [key: string]: number;
};

export default function Schulte() {
  const difficultyValues: DifficultyType = {
    easy: 24,
    medium: 48,
    hard: 80,
    veryHard: 120,
  };

  const { difficulty } = useContext(DifficultyContext);
  console.log(difficulty);
  console.log(difficultyValues[difficulty]);
  const gridArr = [...Array(difficultyValues[difficulty]).keys()].map(cell => cell + 1);

  return (
    <section>
      <h1>Schulte</h1>
      <SchulteGrid grid={gridArr} />
    </section>
  );
}
