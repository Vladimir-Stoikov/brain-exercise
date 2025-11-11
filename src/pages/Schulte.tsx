import React from 'react';
import SchulteGrid from '../features/schulte/components/SchulteGrid';

type DifficultyType = {
  [key: string]: number;
};

export default function Schulte() {
  const difficulty: DifficultyType = {
    easy: 25,
    medium: 49,
    hard: 64,
    veryHard: 100,
  };

  const difficultyLevel = 'medium';
  const gridArr = [...Array(difficulty[difficultyLevel]).keys()].map(cell => cell + 1);

  return (
    <section>
      <h1>Schulte</h1>
      <SchulteGrid grid={gridArr} />
    </section>
  );
}
