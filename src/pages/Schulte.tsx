import React, { useContext, useMemo, useState } from 'react';
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

  const [gameId, setGameId] = useState(0);
  const handleRestart = () => setGameId(prev => prev + 1);

  const { difficulty } = useContext(DifficultyContext);
  const gridArr = useMemo(() => {
    return [...Array(difficultyValues[difficulty]).keys()].map(cell => cell + 1);
  }, [difficulty]);

  return (
    <section>
      <h1>Schulte</h1>
      <SchulteGrid key={gameId} grid={gridArr} onRestart={handleRestart} />
    </section>
  );
}
