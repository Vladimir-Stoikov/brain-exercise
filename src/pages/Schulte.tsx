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

  return (
    <section>
      <h1>Schulte</h1>
      <SchulteGrid grid={[...Array(difficulty[difficultyLevel]).keys()]} />
    </section>
  );
}
